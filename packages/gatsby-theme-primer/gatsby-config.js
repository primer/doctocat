const path = require('path')

module.exports = {
  __experimentalThemes: ['gatsby-plugin-theme-ui'],
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve('./src/pages'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'nav',
        path: path.resolve('./src/data/nav.yml'),
      },
    },
  ],
}
