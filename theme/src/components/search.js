import {BorderBox, Position, TextInput} from '@primer/components'
import Downshift from 'downshift'
import Fuse from 'fuse.js'
import {navigate, useStaticQuery} from 'gatsby'
import React from 'react'
import SearchResults from './search-results'
import useSiteMetadata from '../use-site-metadata'

function Search() {
  const [query, setQuery] = React.useState('')
  const results = useSearch(query)
  const siteMetadata = useSiteMetadata()

  return (
    <Downshift
      inputValue={query}
      onInputValueChange={inputValue => setQuery(inputValue)}
      onSelect={item => {
        if (item) {
          setQuery('')
          navigate(item.path)
        }
      }}
      itemToString={item => (item ? item.title : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        getRootProps,
        isOpen,
        inputValue,
        highlightedIndex,
        clearSelection,
      }) => (
        <Position {...getRootProps({position: 'relative', width: '100%'})}>
          <TextInput
            {...getInputProps({
              type: 'search',
              placeholder: `Search ${siteMetadata.title}...`,
              width: '100%',
              onChange: () => clearSelection(),
            })}
          />
          {isOpen && inputValue ? (
            <Position {...getMenuProps({position: 'absolute', pt: 2})}>
              <BorderBox
                minWidth={300}
                maxHeight="70vh"
                pt={1}
                boxShadow="medium"
                bg="white"
                style={{overflow: 'auto'}}
              >
                <SearchResults
                  results={results}
                  getItemProps={getItemProps}
                  highlightedIndex={highlightedIndex}
                />
              </BorderBox>
            </Position>
          ) : null}
        </Position>
      )}
    </Downshift>
  )
}

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
        }
      }
      allSitePage {
        nodes {
          componentPath
          path
        }
      }
    }
  `)

  const pages = React.useMemo(
    () =>
      data.allSitePage.nodes.reduce((acc, node) => {
        acc[node.componentPath] = node
        return acc
      }, {}),
    [data],
  )

  const list = React.useMemo(
    () =>
      data.allMdx.nodes.map(node => ({
        path: pages[node.fileAbsolutePath].path,
        title: node.frontmatter.title,
        rawBody: node.rawBody,
      })),
    [data, pages],
  )

  const fuse = new Fuse(list, {
    threshold: 0.2,
    keys: ['title', 'rawBody'],
    tokenize: true,
  })

  const [results, setResults] = React.useState([])

  React.useEffect(() => {
    setResults(fuse.search(query))
  }, [query])

  return results
}

export default Search
