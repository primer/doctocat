import {Box, Flex, Text} from '@primer/components'
import {Link} from 'gatsby'
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
        as: Link,
        to: documentsById[item.ref].frontmatter.path,
        tabIndex: -1,
        flexDirection: 'column',
        px: 3,
        py: 2,
        color: 'inherit',
        bg: highlightedIndex === index ? 'gray.2' : 'transparent',
        style: {textDecoration: 'none'},
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
