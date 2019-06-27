import {BorderBox, Position, TextInput} from '@primer/components'
import Downshift from 'downshift'
import {navigate, useStaticQuery} from 'gatsby'
import lunr from 'lunr'
import React from 'react'
import SearchResults from './search-results'

function Search() {
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
          context {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const pages = data.allSitePage.nodes.reduce((acc, node) => {
    acc[node.componentPath] = node
    return acc
  }, {})

  const lunrIndex = lunr(function() {
    this.ref('fileAbsolutePath')
    this.field('title')
    this.field('rawBody')
    data.allMdx.nodes.forEach(node => {
      this.add({
        fileAbsolutePath: node.fileAbsolutePath,
        title: node.frontmatter.title,
        rawBody: node.rawBody,
      })
    })
  })

  const [query, setQuery] = React.useState('')
  const [results, setResults] = React.useState([])

  React.useEffect(() => {
    setResults(lunrIndex.search(`${query}*`))
  }, [query])

  console.log(results)

  return (
    <Downshift
      inputValue={query}
      onInputValueChange={inputValue => setQuery(inputValue)}
      onSelect={item => {
        if (item) {
          setQuery('')
          navigate(pages[item.ref].path)
        }
      }}
      itemToString={item => (item ? item.ref : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        getRootProps,
        isOpen,
        highlightedIndex,
        clearSelection,
      }) => (
        <Position position="relative" {...getRootProps()}>
          <TextInput
            {...getInputProps({
              type: 'search',
              placeholder: 'Search',
              onChange: () => clearSelection(),
            })}
          />
          {isOpen ? (
            <Position position="absolute" {...getMenuProps()}>
              <BorderBox minWidth={300} boxShadow="medium" bg="white">
                <SearchResults
                  results={results}
                  pages={pages}
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

export default Search
