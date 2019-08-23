import Fuse from 'fuse.js'
import {useStaticQuery} from 'gatsby'
import path from 'path'
import React from 'react'

function useSearch(query) {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          fileAbsolutePath
          frontmatter {
            title
          }
          rawBody
          parent {
            ... on File {
              relativeDirectory
              name
            }
          }
        }
      }
    }
  `)

  const list = React.useMemo(
    () =>
      data.allMdx.nodes.map(node => ({
        path: path.join(
          node.parent.relativeDirectory,
          node.parent.name === 'index' ? '/' : node.parent.name,
        ),
        title: node.frontmatter.title,
        rawBody: node.rawBody,
      })),
    [data],
  )

  const fuse = new Fuse(list, {
    threshold: 0.2,
    keys: ['title', 'rawBody'],
    tokenize: true,
  })

  const [results, setResults] = React.useState([])

  React.useEffect(() => {
    setResults(fuse.search(query).slice(0, 20))
  }, [query])

  return results
}

export default useSearch
