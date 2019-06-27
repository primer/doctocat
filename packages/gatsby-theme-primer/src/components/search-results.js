import {Box, Flex, Text} from '@primer/components'
import {Link} from 'gatsby'
import React from 'react'

function SearchResults({results, pages, getItemProps, highlightedIndex}) {
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
        to: pages[item.ref].path,
        tabIndex: -1,
        flexDirection: 'column',
        px: 3,
        py: 2,
        color: 'inherit',
        bg: highlightedIndex === index ? 'gray.2' : 'transparent',
        style: {textDecoration: 'none'},
      })}
    >
      {pages[item.ref].context.frontmatter.title}
      <Text fontSize={0} color="gray.7">
        {pages[item.ref].path}
      </Text>
    </Flex>
  ))
}

export default SearchResults
