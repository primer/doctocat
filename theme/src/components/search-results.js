import {Box, Text} from '@primer/react'
import React from 'react'
import sentenceCase from 'sentence-case'
import useSiteMetadata from '../use-site-metadata'

function SearchResults({results, getItemProps, highlightedIndex}) {
  const siteMetadata = useSiteMetadata()

  if (results.length === 0) {
    return <Box sx={{p: 3, fontSize: 1, color: 'fg.muted', width: '100%'}}>No results</Box>
  }

  return results.map((item, index) => (
    <Box
      key={item.path}
      {...getItemProps({
        item,
        flexDirection: 'column',
        flex: '0 0 auto',
        px: 2,
        py: 2,
        color: 'fg.default',
        fontSize: 1,
        bg: highlightedIndex === index ? 'neutral.muted' : 'transparent',
        style: {cursor: 'pointer'},
        borderRadius: 2,
      })}
      sx={{display: 'flex'}}
    >
      <Text sx={{fontSize: 0, color: 'fg.muted'}}>{getBreadcrumbs(siteMetadata.shortName, item.path).join(' / ')}</Text>
      {item.title}
    </Box>
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
