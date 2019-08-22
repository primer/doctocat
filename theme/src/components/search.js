import {BorderBox, Position} from '@primer/components'
import Downshift from 'downshift'
import {navigate} from 'gatsby'
import React from 'react'
import useSearch from '../use-search'
import useSiteMetadata from '../use-site-metadata'
import DarkTextInput from './dark-text-input'
import SearchResults from './search-results'

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
        <Position {...getRootProps({position: 'relative'})}>
          <DarkTextInput
            {...getInputProps({
              placeholder: `Search ${siteMetadata.title}`,
              width: 240,
              onChange: () => clearSelection(),
            })}
          />
          {isOpen && inputValue ? (
            <Position
              {...getMenuProps({
                position: 'absolute',
                left: 0,
                right: 0,
                pt: 2,
              })}
            >
              <BorderBox
                minWidth={300}
                maxHeight="70vh"
                py={1}
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

export default Search
