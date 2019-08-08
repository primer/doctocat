import {graphql, useStaticQuery} from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

function Head({title, description}) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const {siteMetadata} = data.site

  return (
    <Helmet
      titleTemplate={`%s | ${siteMetadata.title}`}
      defaultTitle={siteMetadata.title}
    >
      <title>{title}</title>
      <meta
        name="description"
        content={description || siteMetadata.description}
      />
    </Helmet>
  )
}

export default Head
