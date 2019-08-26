import {Absolute, Fixed, Flex, StyledOcticon} from '@primer/components'
import {X} from '@primer/octicons-react'
import Downshift from 'downshift'
import {AnimatePresence, motion} from 'framer-motion'
import {navigate} from 'gatsby'
import React from 'react'
import {FocusOn} from 'react-focus-on'
import useOnEscape from '../use-on-escape'
import useSearch from '../use-search'
import DarkButton from './dark-button'
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

  useOnEscape(event => {
    event.preventDefault()
    handleDismiss()
  })

  return (
    <AnimatePresence>
      {isOpen ? (
        <FocusOn returnFocus={true}>
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
              bg="rgba(0,0,0,0.5)"
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
                  setQuery('')
                  onDismiss()
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
                    height: isMenuOpen ? '100vh' : 'auto',
                  })}
                >
                  <Flex bg="gray.9" color="white" p={3} flex="0 0 auto">
                    <DarkTextInput
                      {...getInputProps({
                        as: motion.input,
                        initial: {scaleX: 0.1},
                        animate: {scaleX: 1},
                        exit: {scaleX: 0.1, transition: {duration: 0.1}},
                        transition: {type: 'tween', duration: 0.2},
                        placeholder: `Search`,
                        width: '100%',
                        style: {originX: '100%'},
                      })}
                    />
                    <DarkButton
                      ml={3}
                      aria-label="Cancel"
                      onClick={handleDismiss}
                    >
                      <StyledOcticon icon={X} />
                    </DarkButton>
                  </Flex>
                  {isMenuOpen ? (
                    <Flex
                      {...getMenuProps({
                        bg: 'white',
                        py: 1,
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
                    </Flex>
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
