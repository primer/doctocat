import {BorderBox, Position, TextInput} from '@primer/components'
import Downshift from 'downshift'
import {useStaticQuery} from 'gatsby'
import lunr from 'lunr'
import React from 'react'
import SearchResults from './search-results'

function Search() {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            title
          }
          rawBody
        }
      }
    }
  `)

  const lunrIndex = lunr(function() {
    this.ref('title')
    this.field('rawBody')
    data.allMdx.nodes.forEach(node => {
      this.add({title: node.frontmatter.title, rawBody: node.rawBody})
    })
  })

  const [query, setQuery] = React.useState('')
  const [results, setResults] = React.useState([])

  React.useEffect(() => {
    setResults(lunrIndex.search(query))
  }, [query])

  return (
    <Downshift
      inputValue={query}
      onInputValueChange={inputValue => setQuery(inputValue)}
      onChange={selection => console.log(`You selected ${selection.ref}`)}
      itemToString={item => (item ? item.ref : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        getRootProps,
        isOpen,
        highlightedIndex,
      }) => (
        <Position position="relative" {...getRootProps()}>
          <TextInput
            {...getInputProps({
              type: 'search',
              placeholder: 'Search',
            })}
          />
          {isOpen ? (
            <Position position="absolute" {...getMenuProps()}>
              <BorderBox minWidth={300} boxShadow="medium" bg="white">
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

export default Search
