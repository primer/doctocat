const path = require('path')

module.exports = {
  __experimentalThemes: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        repoRootPath: path.resolve(process.cwd(), '../..'),
      },
    },
  ],
  plugins: ['gatsby-plugin-sass'],
}
