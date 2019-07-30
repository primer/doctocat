const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Doctocat',
    description: 'A Gatsby theme for creating Primer documentation sites',
  },
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
