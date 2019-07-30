import {useStaticQuery, graphql} from 'gatsby'

function useSiteMetadata() {
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
  return data.site.siteMetadata
}

export default useSiteMetadata
