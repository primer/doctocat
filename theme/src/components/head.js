import React from 'react'
import useSiteMetadata from '../use-site-metadata'

function Head(props) {
  const siteMetadata = useSiteMetadata()
  const title = props.title ? `${props.title} | ${siteMetadata.title}` : siteMetadata.title
  const description = props.description || siteMetadata.description

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteMetadata.imageUrl} />
      <meta property="twitter:card" content="summary_large_image" />
    </>
  )
}

export default Head
