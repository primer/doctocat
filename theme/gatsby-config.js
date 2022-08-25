const path = require('path')

module.exports = themeOptions => {
  return {
    siteMetadata: {
      title: 'Doctocat',
      shortName: 'Doctocat',
      description: 'A Gatsby theme for creating Primer documentation sites',
      imageUrl: 'https://user-images.githubusercontent.com/10384315/53922681-2f6d3100-402a-11e9-9719-5d1811c8110a.png'
    },
    plugins: [
      'gatsby-plugin-styled-components',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-remove-trailing-slashes',
      'gatsby-transformer-yaml',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          defaultLayouts: {
            default: require.resolve('./src/components/layout.js')
          }
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'content',
          path: path.resolve('./content')
        }
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          icon: themeOptions.icon ? path.resolve(themeOptions.icon) : require.resolve('./src/images/favicon.png')
        }
      }
    ]
  }
}
