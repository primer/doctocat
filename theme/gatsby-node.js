const path = require('path')
const readPkgUp = require('read-pkg-up')
const getPkgRepo = require('get-pkg-repo')
const memoize = require('lodash.memoize')

const getRepo = memoize(() => {
  return getPkgRepo(readPkgUp.sync().package)
})

function generateEditUrl(page, themeOptions) {
  try {
    const {domain, user, project} = getRepo()
    const relativePath = path.relative(
      themeOptions.repoRootPath,
      page.componentPath,
    )
    return `https://${domain}/${user}/${project}/edit/master/${relativePath}`
  } catch (error) {
    console.warn(
      `[warning] An edit url could not be generated for ${page.path}`,
    )
    return null
  }
}

exports.createPages = async ({graphql, actions}, themeOptions) => {
  const {createPage, deletePage} = actions
  const docsTemplate = require.resolve(`./src/templates/layout.js`)

  const MdxPages = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fileAbsolutePath
            parent {
              id 
              ... on File {
                id
                absolutePath
              }
            }
          }
        }
      }
    }
  `)

  

  MdxPages.data.allMdx.edges.forEach(({node}) => {
    const relativePath = path.relative(
      themeOptions.repoRootPath,
      node.parent.absolutePath,
    )

    createPage({
      path: relativePath,
      component: docsTemplate,
      context: {
        editUrl: generateEditUrl(node.parent.absolutePath, themeOptions),
        title: node.frontmatter.title
      }
    })
  })
}