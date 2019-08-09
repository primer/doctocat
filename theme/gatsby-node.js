const path = require('path')
const readPkgUp = require('read-pkg-up')
const getPkgRepo = require('get-pkg-repo')
const memoize = require('lodash.memoize')

const getRepo = memoize(() => {
  return getPkgRepo(readPkgUp.sync().package)
})

function generateEditUrl(rootAbsolutePath, fileAbsolutePath) {
  try {
    const {domain, user, project} = getRepo()
    const fileRelativePath = path.relative(rootAbsolutePath, fileAbsolutePath)
    return `https://${domain}/${user}/${project}/edit/master/${fileRelativePath}`
  } catch (error) {
    console.warn(
      `[warning] An edit url could not be generated for ${fileAbsolutePath}`,
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

    const rootAbsolutePath = path.resolve(
      process.cwd(),
      themeOptions.repoRootPath || '.',
    )

    const editUrl = generateEditUrl(rootAbsolutePath, node.fileAbsolutePath)

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
