import {Button} from '@primer/react'
import {SearchIcon, XIcon} from '@primer/octicons-react'
import Downshift from 'downshift'
import {AnimatePresence, motion} from 'framer-motion'
import {navigate} from 'gatsby'
import React from 'react'
import {FocusOn} from 'react-focus-on'
import useSearch from '../use-search'
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
    case Downshift.stateChangeTypes.blurInput:
      // Don't let a blur event change the state of `inputValue` or `isOpen`.
      return {...changes, inputValue: state.inputValue, isOpen: state.isOpen}
    default:
      return changes
  }
}

function MobileSearch({isOpen, onDismiss}) {
  const [query, setQuery] = React.useState('')
  const results = useSearch(query)

  function handleDismiss() {
    setQuery('')
    onDismiss()
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <FocusOn returnFocus={true} onEscapeKey={() => handleDismiss()}>
          <div style={{top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, position: 'fixed'}}>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={handleDismiss}
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: -1,
                position: 'absolute',
              }}
            />
            <Downshift
              inputValue={query}
              onInputValueChange={inputValue => setQuery(inputValue)}
              selectedItem={null}
              onSelect={item => {
                if (item) {
                  navigate(item.path)
                  handleDismiss()
                }
              }}
              itemToString={item => (item ? item.title : '')}
              stateReducer={stateReducer}
            >
              {({getInputProps, getItemProps, getMenuProps, getRootProps, isOpen: isMenuOpen, highlightedIndex}) => (
                <div
                  {...getRootProps()}
                  style={{display: 'flex', flexDirection: 'column', height: isMenuOpen ? '100%' : 'auto'}}
                >
                  <div
                    style={{
                      backgroundColor: 'var(--bgColor-default, var(--color-canvas-default))',
                      color: 'var(--fgColor-default, var(--color-fg-default))',
                      padding: 16,
                      flex: '0 0 auto',
                      display: 'flex',
                    }}
                  >
                    <motion.div
                      initial={{scaleX: 0.1}}
                      animate={{scaleX: 1}}
                      exit={{scaleX: 0.1, transition: {duration: 0.1}}}
                      transition={{type: 'tween', duration: 0.2}}
                      style={{width: '100%', originX: '100%'}}
                    >
                      <TextInput
                        leadingVisual={SearchIcon}
                        {...getInputProps({
                          placeholder: `Search`,
                          style: {width: '100%'},
                        })}
                      />
                    </motion.div>
                    <Button aria-label="Cancel" onClick={handleDismiss} style={{marginLeft: 16}}>
                      <XIcon />
                    </Button>
                  </div>
                  {isMenuOpen ? (
                    <div
                      {...getMenuProps()}
                      style={{
                        display: 'flex',
                        backgroundColor: 'var(--bgColor-default, var(--color-canvas-default))',
                        paddingTop: 4,
                        paddingBottom: 4,
                        paddingLeft: 8,
                        paddingRight: 8,
                        flexDirection: 'column',
                        flex: '1 1 auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                      }}
                    >
                      <SearchResults
                        results={results}
                        getItemProps={getItemProps}
                        highlightedIndex={highlightedIndex}
                      />
                    </div>
                  ) : null}
                </div>
              )}
            </Downshift>
          </div>
        </FocusOn>
      ) : null}
    </AnimatePresence>
  )
}

export default MobileSearch
