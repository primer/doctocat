const path = require('path')
const findUp = require('find-up')
const readPkgUp = require('read-pkg-up')
const getPkgRepo = require('get-pkg-repo')
const memoize = require('lodash.memoize')

const getRootPath = memoize(() => {
  return path.parse(findUp.sync('.git', {type: 'directory'})).dir
})

const getRepo = memoize(() => {
  return getPkgRepo(readPkgUp.sync().package)
})

function getEditUrl(page) {
  const {domain, user, project} = getRepo()
  const relativePath = path.relative(getRootPath(), page.componentPath)
  return `https://${domain}/${user}/${project}/edit/master/${relativePath}`
}

exports.onCreatePage = ({page, actions}) => {
  const editUrl = getEditUrl(page)
  actions.deletePage(page)
  actions.createPage({
    ...page,
    context: {
      ...page.context,
      editUrl,
    },
  })
}
