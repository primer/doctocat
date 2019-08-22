import {Box, Flex, Text} from '@primer/components'
import {Link} from 'gatsby'
import React from 'react'
import sentenceCase from 'sentence-case'
import useSiteMetadata from '../use-site-metadata'

function SearchResults({results, getItemProps, highlightedIndex}) {
  const siteMetadata = useSiteMetadata()

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
        {getBreadcrumbs(siteMetadata.shortName, item.path).join(' / ')}
      </Text>
      {item.title}
    </Flex>
  ))
}

function getBreadcrumbs(siteTitle, path) {
  return [
    siteTitle,
    ...path
      .split('/')
      .filter(Boolean)
      // The last title will be displayed separately, so we exclude it
      // from the breadcrumbs to avoid displaying it twice.
      .slice(0, -1)
      .map(sentenceCase),
  ]
}

export default SearchResults
