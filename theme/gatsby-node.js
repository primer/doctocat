const path = require('path')
const readPkgUp = require('read-pkg-up')
const getPkgRepo = require('get-pkg-repo')
const memoize = require('lodash.memoize')

const getRepo = memoize(() => {
  return getPkgRepo(readPkgUp.sync().package)
})

function generateEditUrl(rootPath, absolutePath) {
  try {
    const {domain, user, project} = getRepo()
    const relativePath = path.relative(rootPath, absolutePath)
    return `https://${domain}/${user}/${project}/edit/master/${relativePath}`
  } catch (error) {
    console.warn(
      `[warning] An edit url could not be generated for ${absolutePath}`,
    )
    return null
  }
}

exports.createPages = async ({graphql, actions}, themeOptions) => {
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

  data.allMdx.nodes.forEach(node => {
    const pagePath = path.join(
      node.parent.relativeDirectory,
      node.parent.name === 'index' ? '/' : node.parent.name,
    )

    const editUrl = generateEditUrl(
      themeOptions.repoRootPath || process.cwd(),
      node.fileAbsolutePath,
    )

    actions.createPage({
      path: pagePath,
      component: node.fileAbsolutePath,
      context: {
        editUrl,
        tableOfContents: node.tableOfContents,
        // We don't need to add `frontmatter` to the page context here
        // because gatsby-plugin-mdx automatically does that.
        // Source: https://git.io/fjQDa
      },
    })
  })
}
