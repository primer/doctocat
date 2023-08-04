import {useStaticQuery, graphql} from 'gatsby'

function usePathPrefix() {
  const data = useStaticQuery(graphql`
    {
      site {
        pathPrefix
      }
    }
  `)
  return data.site.pathPrefix
}

export default usePathPrefix
