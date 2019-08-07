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
        color: highlightedIndex === index ? 'white' : 'gray.8',
        bg: highlightedIndex === index ? 'blue.5' : 'transparent',
        style: {textDecoration: 'none'},
      })}
    >
      <Text
        fontSize={0}
        color={highlightedIndex === index ? 'blue.2' : 'gray.7'}
      >
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
