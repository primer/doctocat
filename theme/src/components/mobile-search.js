import { Absolute, Box, Button, Fixed, Flex } from '@primer/components'
import { XIcon } from '@primer/octicons-react'
import Downshift from 'downshift'
import { AnimatePresence, motion } from 'framer-motion'
import { navigate } from 'gatsby'
import React from 'react'
import { FocusOn } from 'react-focus-on'
import useSearch from '../use-search'
import DarkTextInput from './dark-text-input'
import SearchResults from './search-results'

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
          <Fixed top={0} left={0} right={0} bottom={0} zIndex={1}>
            <Absolute
              as={motion.div}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="primer.canvas.backdrop"
              zIndex={-1}
              onClick={handleDismiss}
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
              {({
                getInputProps,
                getItemProps,
                getMenuProps,
                getRootProps,
                isOpen: isMenuOpen,
                highlightedIndex,
              }) => (
                <Flex
                  {...getRootProps({
                    flexDirection: 'column',
                    height: isMenuOpen ? '100%' : 'auto',
                  })}
                >
                  <Flex
                    bg="canvas.default"
                    color="fg.default"
                    p={3}
                    flex="0 0 auto"
                  >
                    <motion.div
                      initial={{scaleX: 0.1}}
                      animate={{scaleX: 1}}
                      exit={{scaleX: 0.1, transition: {duration: 0.1}}}
                      transition={{type: 'tween', duration: 0.2}}
                      style={{width: '100%', originX: '100%'}}
                    >
                      <DarkTextInput
                        {...getInputProps({
                          placeholder: `Search`,
                          width: '100%',
                        })}
                      />
                    </motion.div>
                    <Button
                      aria-label="Cancel"
                      onClick={handleDismiss}
                      sx={{ml: 3}}
                    >
                      <XIcon />
                    </Button>
                  </Flex>
                  {isMenuOpen ? (
                    <Box
                      {...getMenuProps({
                        display: 'flex',
                        bg: 'canvas.default',
                        py: 1,
                        px: 2,
                        flexDirection: 'column',
                        flex: '1 1 auto',
                        style: {
                          overflow: 'auto',
                          WebkitOverflowScrolling: 'touch',
                        },
                      })}
                    >
                      <SearchResults
                        results={results}
                        getItemProps={getItemProps}
                        highlightedIndex={highlightedIndex}
                      />
                    </Box>
                  ) : null}
                </Flex>
              )}
            </Downshift>
          </Fixed>
        </FocusOn>
      ) : null}
    </AnimatePresence>
  )
}

export default MobileSearch
