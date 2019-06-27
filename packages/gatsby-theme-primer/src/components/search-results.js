import {Box, Flex, Text} from '@primer/components'
import React from 'react'

function SearchResults({
  results,
  documentsById,
  getItemProps,
  highlightedIndex,
}) {
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
        flexDirection: 'column',
        px: 3,
        py: 2,
        bg: highlightedIndex === index ? 'gray.2' : 'transparent',
      })}
    >
      {documentsById[item.ref].frontmatter.title}
      <Text fontSize={0} color="gray.7">
        {documentsById[item.ref].frontmatter.path}
      </Text>
    </Flex>
  ))
}

export default SearchResults
