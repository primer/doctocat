import {Flex, Text} from '@primer/components'
import React from 'react'
import sentenceCase from 'sentence-case'
import useSiteMetadata from '../use-site-metadata'

function SearchResults({results, getItemProps, highlightedIndex}) {
  const siteMetadata = useSiteMetadata()

  if (results.length === 0) {
    return (
      <Text as="div" p={3} fontSize={1} color="gray.7" width="100%">
        No results
      </Text>
    )
  }

  return results.map((item, index) => (
    <Flex
      key={item.path}
      {...getItemProps({
        item,
        flexDirection: 'column',
        flex: '0 0 auto',
        px: 3,
        py: 2,
        color: highlightedIndex === index ? 'white' : 'gray.8',
        bg: highlightedIndex === index ? 'blue.5' : 'transparent',
        style: {cursor: 'pointer'},
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
