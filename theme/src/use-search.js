import {graphql, useStaticQuery} from 'gatsby'
import path from 'path'
import React from 'react'
import SearchWorker from 'worker-loader!./search.worker.js'

const ensureAbsolute = uri => (uri.startsWith('/') ? uri : `/${uri}`)

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

      allCustomSearchDoc {
        path
        title
        rawBody
      }
    }
  `)

  const list = React.useMemo(() => {
    const mdxData = data.allMdx.nodes.map(node => ({
      path: ensureAbsolute(
        path.join(node.parent.relativeDirectory, node.parent.name === 'index' ? '/' : node.parent.name)
      ),
      title: node.frontmatter.title,
      rawBody: node.rawBody
    }))

    return [...mdxData, data.allCustomSearchDoc.nodes]
  }, [data])

  const [results, setResults] = React.useState(list)

  const handleSearchResults = React.useCallback(({data}) => {
    if (data.query && data.results && data.query === latestQuery.current) {
      setResults(data.results)
    }
  }, [])

  React.useEffect(() => {
    const worker = new SearchWorker()
    worker.addEventListener('message', handleSearchResults)
    worker.postMessage({list})
    workerRef.current = worker

    return () => {
      workerRef.current.terminate()
    }
  }, [list, handleSearchResults])

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
