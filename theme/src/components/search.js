import {SearchIcon} from '@primer/octicons-react'
import {ThemeProvider} from '@primer/react'
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
        <div {...getRootProps()} style={{position: 'relative'}}>
          <TextInput
            leadingVisual={SearchIcon}
            {...getInputProps({
              placeholder: `Search ${siteMetadata.title}`,
              style: {width: 300},
            })}
          />
          {isOpen ? (
            <div {...getMenuProps()} style={{position: 'absolute', left: 0, right: 0, paddingTop: 8}}>
              <ThemeProvider colorMode="day">
                <div
                  style={{
                    overflow: 'auto',
                    minWidth: 300,
                    maxHeight: '70vh',
                    padding: 8,
                    boxShadow: 'var(--shadow-large)',
                    border: '1px solid var(--borderColor-muted, var(--color-border-muted))',
                    backgroundColor: 'var(--overlay-bgColor, var(--color-canvas-overlay))',
                    borderRadius: '12px',
                  }}
                >
                  <SearchResults results={results} getItemProps={getItemProps} highlightedIndex={highlightedIndex} />
                </div>
              </ThemeProvider>
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  )
}

export default Search
