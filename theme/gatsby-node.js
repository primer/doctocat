const path = require('path')
const fs = require('fs')
const readPkgUp = require('read-pkg-up')
const getPkgRepo = require('get-pkg-repo')
const axios = require('axios')
const uniqBy = require('lodash.uniqby')
const extractExports = require(`gatsby-plugin-mdx/utils/extract-exports`)
const mdx = require(`gatsby-plugin-mdx/utils/mdx`)

const CONTRIBUTOR_CACHE = new Map()

exports.createPages = async ({graphql, actions}, themeOptions) => {
  const repo = getPkgRepo(readPkgUp.sync().package)

  const {data} = await graphql(`
    query {
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
  await Promise.all(
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

exports.onPostBuild = async ({graphql}) => {
  try {
    const {data} = await graphql(`
      query {
        allSitePage(filter: {context: {frontmatter: {componentId: {ne: null}}}}) {
          nodes {
            path
            context {
              frontmatter {
                componentId
                status
              }
            }
          }
        }
      }
    `)

    const components = data.allSitePage.nodes.reduce((metadataArr, node) => {
      const {
        path,
        context: {
          frontmatter: {status, componentId}
        }
      } = node
      if (status && componentId) {
        metadataArr.push({
          id: componentId,
          path: path,
          status: status.toLowerCase()
        })
      }
      return metadataArr
    }, [])

    console.log(123456, components)

    fs.writeFileSync(path.resolve(process.cwd(), 'public/components.json'), JSON.stringify(components))
  } catch (error) {
    // This is not necessarily an error, so we just log a warning instead of failing the build.
    // Some sites won't have any markdown files with `componentId` frontmatter and that's okay.
    console.warn('Unable to build components.json')
  }
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
