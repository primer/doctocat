const path = require('path')
const readPkgUp = require('read-pkg-up')
const getPkgRepo = require('get-pkg-repo')
const axios = require('axios')
const uniqBy = require('lodash.uniqby')

exports.sourceNodes = ({actions, createContentDigest}) => {
  // Make the repository URL accessible through Gatsby's GraphQL API.
  const repo = getRepo()
  const url = `https://github.com/${repo.user}/${repo.project}`
  const node = {
    url,
    id: `repository`,
    parent: null,
    children: [],
    internal: {
      type: 'Repository',
      mediaType: 'application/json',
      content: JSON.stringify({url}),
      contentDigest: createContentDigest({url}),
    },
  }
  actions.createNode(node)
}

exports.createPages = async ({graphql, actions}, themeOptions) => {
  const repo = getRepo()

  const {data} = await graphql(`
    {
      allMdx {
        nodes {
          fileAbsolutePath
          tableOfContents
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

  // Turn every MDX file into a page.
  return Promise.all(
    data.allMdx.nodes.map(async node => {
      const pagePath = path
        .join(
          node.parent.relativeDirectory,
          node.parent.name === 'index' ? '/' : node.parent.name,
        )
        .replace(/\\/g, '/') // Needed to fix paths on windows file systems

      const rootAbsolutePath = path.resolve(
        process.cwd(),
        themeOptions.repoRootPath || '.',
      )

      const fileRelativePath = path.relative(
        rootAbsolutePath,
        node.fileAbsolutePath,
      )

      const editUrl = getEditUrl(repo, fileRelativePath)

      const contributors = await fetchContributors(repo, fileRelativePath)

      actions.createPage({
        path: pagePath,
        component: node.fileAbsolutePath,
        context: {
          editUrl,
          contributors,
          tableOfContents: node.tableOfContents,
          // We don't need to add `frontmatter` to the page context here
          // because gatsby-plugin-mdx automatically does that.
          // Source: https://git.io/fjQDa
        },
      })
    }),
  )
}

function getRepo() {
  return getPkgRepo(readPkgUp.sync().package)
}

function getEditUrl(repo, filePath) {
  return `https://github.com/${repo.user}/${repo.project}/edit/master/${filePath}`
}

async function fetchContributors(repo, filePath) {
  try {
    const {data} = await axios.get(
      `https://api.github.com/repos/${repo.user}/${repo.project}/commits?path=${filePath}`,
    )

    const commits = data
      .map(commit => ({
        login: commit.author && commit.author.login,
        latestCommit: {
          date: commit.commit.author.date,
          url: commit.html_url,
        },
      }))
      .filter(contributor => Boolean(contributor.login))

    return uniqBy(commits, 'login')
  } catch (error) {
    console.error(
      `[ERROR] Unable to fetch contributors for ${filePath}. ${error.message}`,
    )
    return []
  }
}
