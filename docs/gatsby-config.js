const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Doctocat',
    shortName: 'Doctocat',
    description: 'A Gatsby theme for creating Primer documentation sites',
  },
  pathPrefix: '/doctocat',
  __experimentalThemes: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        repoRootPath: '..',
      },
    },
  ],
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          react: path.resolve(__dirname, '..', 'node_modules', 'react')
        }
      }
    }
  ],
}
