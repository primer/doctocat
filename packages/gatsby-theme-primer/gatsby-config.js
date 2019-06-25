const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src/pages`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `nav`,
        path: path.resolve(`./src/data/nav.yml`),
      },
    },
  ],
}
