exports.createPages = ({graphql, actions}) => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              nodes {
                fileAbsolutePath
                frontmatter {
                  path
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allMdx.nodes.forEach(node => {
          actions.createPage({
            path: node.frontmatter.path,
            component: node.fileAbsolutePath,
          })
        })
      }),
    )
  })
}
