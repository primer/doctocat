import {Box, ThemeProvider} from '@primer/react'
import Downshift from 'downshift'
import {navigate} from 'gatsby'
import React from 'react'
import useSearch from '../use-search'
import useSiteMetadata from '../use-site-metadata'
import SearchResults from './search-results'
import TextInput from './text-input'

function stateReducer(state, changes) {
  switch (changes.type) {
    case Downshift.stateChangeTypes.changeInput:
      if (!changes.inputValue) {
        // Close the menu if the input is empty.
        return {...changes, isOpen: false}
      }
      return changes
    default:
      return changes
  }
}

function Search() {
  const [query, setQuery] = React.useState('')
  const results = useSearch(query)
  const siteMetadata = useSiteMetadata()

  return (
    <Downshift
      inputValue={query}
      onInputValueChange={inputValue => setQuery(inputValue)}
      // We don't need Downshift to keep track of a selected item because as
      // soon as an item is selected we navigate to a new page.
      // Let's avoid any unexpected states related to the selected item
      // by setting it to always be `null`.
      selectedItem={null}
      onSelect={item => {
        if (item) {
          navigate(item.path)
          setQuery('')
        }
      }}
      itemToString={item => (item ? item.title : '')}
      stateReducer={stateReducer}
    >
      {({getInputProps, getItemProps, getMenuProps, getRootProps, isOpen, highlightedIndex}) => (
        <Box {...getRootProps({position: 'relative'})}>
          <TextInput
            {...getInputProps({
              placeholder: `Search ${siteMetadata.title}`,
              sx: {
                width: 240
              }
            })}
          />
          {isOpen ? (
            <Box
              {...getMenuProps({
                position: 'absolute',
                left: 0,
                right: 0,
                pt: 2
              })}
            >
              <ThemeProvider colorMode="day">
                <Box
                  style={{overflow: 'auto'}}
                  sx={{
                    minWidth: 300,
                    maxHeight: '70vh',
                    p: 2,
                    boxShadow: 'shadow.large',
                    borderColor: 'border.muted',
                    bg: 'canvas.overlay',
                    borderRadius: '12px',
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                >
                  <SearchResults results={results} getItemProps={getItemProps} highlightedIndex={highlightedIndex} />
                </Box>
              </ThemeProvider>
            </Box>
          ) : null}
        </Box>
      )}
    </Downshift>
  )
}

export default Search
