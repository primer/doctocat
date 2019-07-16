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

exports.onCreatePage = ({page, actions}, themeOptions) => {
  const editUrl = generateEditUrl(page, themeOptions)
  actions.deletePage(page)
  actions.createPage({
    ...page,
    context: {
      ...page.context,
      editUrl,
    },
  })
}
