import {graphql, useStaticQuery} from 'gatsby'
import path from 'path'
import React from 'react'
import SearchWorker from 'worker-loader!./search.worker.js'

function useSearch(query) {
  const latestQuery = React.useRef(query)
  const workerRef = React.useRef()

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

  const [results, setResults] = React.useState(list)

  const handleSearchResults = React.useCallback(({data}) => {
    if (data.query && data.results && data.query === latestQuery.current) {
      setResults(data.results)
    }
  }, [])

  React.useEffect(() => {
    workerRef.current = new SearchWorker()
    workerRef.current.addEventListener('message', handleSearchResults)
    workerRef.current.postMessage({list})

    return () => {
      workerRef.current.terminate()
    }
  }, [list])

  React.useEffect(() => {
    latestQuery.current = query
    if (query && workerRef.current) {
      workerRef.current.postMessage({query: query})
    } else {
      setResults(list)
    }
  }, [query, list])

  return results
}

export default useSearch
