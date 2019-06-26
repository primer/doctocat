import {Box, Flex} from '@primer/components'
import React from 'react'

function SearchResults({results, getItemProps, highlightedIndex}) {
  if (results.length === 0) {
    return (
      <Box px={3} py={2}>
        No results
      </Box>
    )
  }

  return results.map((item, index) => (
    <Flex
      {...getItemProps({
        key: item.ref,
        index,
        item,
        px: 3,
        py: 2,
        bg: highlightedIndex === index ? 'gray.2' : 'transparent',
      })}
    >
      {item.ref}
    </Flex>
  ))
}

export default SearchResults
