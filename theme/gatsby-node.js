const path = require('path')
const readPkgUp = require('read-pkg-up')
const getPkgRepo = require('get-pkg-repo')
const axios = require('axios')
const uniqBy = require('lodash.uniqby')
const extractExports = require(`gatsby-plugin-mdx/utils/extract-exports`)
const mdx = require(`gatsby-plugin-mdx/utils/mdx`)
const requireGlob = require('require-glob')
const checklistSchema = require('./src/checklists/component.schema.js')
const checklistSchemas = requireGlob.sync('./src/checklists/*.schema.js')

exports.sourceNodes = ({actions, createNodeId, createContentDigest}) => {
  const {createNode} = actions

  // Add checklist schemas to GraphQL API
  for (const schemaKey in checklistSchemas) {
    const name = schemaKey.replace('Schema', '')
    const data = {name, ...checklistSchemas[schemaKey]}
    console.log(data)

    const node = {
      id: createNodeId(schemaKey),
      parent: null,
      children: [],
      internal: {
        type: 'ChecklistSchema',
        contentDigest: createContentDigest(data)
      },
      ...data
    }
    createNode(node)
  }
}

const CONTRIBUTOR_CACHE = new Map()

exports.createPages = async ({graphql, actions}, themeOptions) => {
  const repo = getPkgRepo(readPkgUp.sync().package)
  console.log(checklistSchema)

  const {data} = await graphql(`
    {
      allMdx {
        nodes {
          fileAbsolutePath
          rawBody
          tableOfContents(maxDepth: 2)
          parent {
            ... on File {
              relativeDirectory
              name
            }
          }
        }
      }
    }
  `)

  if (!process.env.GITHUB_TOKEN && !process.env.NOW_GITHUB_DEPLOYMENT && !process.env.VERCEL_GITHUB_DEPLOYMENT) {
    console.error(`Non-deploy build and no GITHUB_TOKEN environment variable set; skipping GitHub API calls`)
  }

  // Turn every MDX file into a page.
  return Promise.all(
    data.allMdx.nodes.map(async node => {
      const pagePath = path
        .join(node.parent.relativeDirectory, node.parent.name === 'index' ? '/' : node.parent.name)
        .replace(/\\/g, '/') // Convert Windows backslash paths to forward slash paths: foo\\bar → foo/bar

      const rootAbsolutePath = path.resolve(process.cwd(), themeOptions.repoRootPath || '.')

      const fileRelativePath = path.relative(rootAbsolutePath, node.fileAbsolutePath)
      const defaultBranch = themeOptions.defaultBranch || 'master'
      const editUrl = getEditUrl(repo, fileRelativePath, defaultBranch)

      let contributors = []
      if (process.env.GITHUB_TOKEN || process.env.NOW_GITHUB_DEPLOYMENT || process.env.VERCEL_GITHUB_DEPLOYMENT) {
        contributors = await fetchContributors(repo, fileRelativePath, process.env.GITHUB_TOKEN)
      }

      // Copied from gatsby-plugin-mdx (https://git.io/JUs3H)
      // as a workaround for https://github.com/gatsbyjs/gatsby/issues/21837
      const code = await mdx(node.rawBody)
      const {frontmatter} = extractExports(code)

      // console.log(checklistSchema)

      if (frontmatter.checklist) {
        validateChecklist(frontmatter.checklist, checklistSchema, fileRelativePath)
      }

      actions.createPage({
        path: pagePath,
        component: node.fileAbsolutePath,
        context: {
          editUrl,
          contributors,
          tableOfContents: node.tableOfContents,
          // Note: gatsby-plugin-mdx should insert frontmatter
          // for us here, and does on the first build,
          // but when HMR kicks in the frontmatter is lost.
          // The solution is to include it here explicitly.
          frontmatter
        }
      })
    })
  )
}

function getEditUrl(repo, filePath, defaultBranch) {
  return `https://github.com/${repo.user}/${repo.project}/edit/${defaultBranch}/${filePath}`
}

async function fetchContributors(repo, filePath, accessToken = '') {
  const hash = `${repo.user}/${repo.project}/${filePath}`
  const cached = CONTRIBUTOR_CACHE.get(hash)
  if (cached) {
    return cached
  }

  try {
    const req = {
      method: 'get',
      baseURL: 'https://api.github.com/',
      url: `/repos/${repo.user}/${repo.project}/commits?path=${filePath}&per_page=100`
    }

    if (accessToken && accessToken.length) {
      req.headers = {
        Authorization: `token ${accessToken}`
      }
    }

    const {data} = await axios.request(req)

    const commits = data
      .map(commit => ({
        login: commit.author && commit.author.login,
        latestCommit: {
          date: commit.commit.author.date,
          url: commit.html_url
        }
      }))
      .filter(contributor => Boolean(contributor.login))

    const result = uniqBy(commits, 'login')
    CONTRIBUTOR_CACHE.set(hash, result)
    return result
  } catch (error) {
    console.error(`[ERROR] Unable to fetch contributors for ${filePath}. ${error.message}`)
    return []
  }
}

function validateChecklist(checklist, schema, file) {
  // Assert that checklist is not an array
  if (Array.isArray(checklist)) {
    throw new Error(`\`checklist\` fontmatter variable in ${file} must follow this structure:\n
checklist:
${Object.keys(schema)
  .map(item => `  ${item}: false # or true`)
  .join('\n')}\n
Found an array instead.
  `)
  }

  // Assert that all entries in checklist are boolean values
  Object.entries(checklist).forEach(([item, value]) => {
    if (typeof value !== 'boolean') {
      throw new Error(`Checklist item \`${item}: ${JSON.stringify(value)}\` is not a boolean value (${file})`)
    }
  })

  // Assert that there are no unrecognized checklist items
  Object.keys(checklist).forEach(item => {
    if (!Object.keys(schema).includes(item)) {
      throw new Error(`Unrecognized checklist item: \`${item}\` (${file})`)
    }
  })

  // Assert that all keys in the checklist schema are present.
  // This makes checklist items more discoverable.
  Object.keys(schema).forEach(item => {
    if (!Object.keys(checklist).includes(item)) {
      throw new Error(
        `\`checklist\` fontmatter variable in ${file} must include all of the following keys:
${Object.keys(schema)
  .map(item => `  ${item}`)
  .join('\n')}`
      )
    }
  })
}
