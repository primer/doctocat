import {Box, Flex, Text} from '@primer/components'
import {Link} from 'gatsby'
import React from 'react'
import sentenceCase from 'sentence-case'

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
        as: Link,
        to: item.path,
        tabIndex: -1,
        flexDirection: 'column',
        px: 3,
        py: 2,
        color: 'inherit',
        bg: highlightedIndex === index ? 'gray.2' : 'transparent',
        style: {textDecoration: 'none'},
      })}
    >
      <Text fontSize={0} color="gray.7">
        {item.path
          .split('/')
          .filter(Boolean)
          .map(sentenceCase)
          .join(' / ') || '/'}
      </Text>
      {item.title}
    </Flex>
  ))
}

export default SearchResults
