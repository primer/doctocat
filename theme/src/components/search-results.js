import React from 'react'
import {sentenceCase} from 'change-case'
import useSiteMetadata from '../use-site-metadata'

function SearchResults({results, getItemProps, highlightedIndex}) {
  const siteMetadata = useSiteMetadata()

  if (results.length === 0) {
    return (
      <div
        style={{
          padding: 16,
          fontSize: 14,
          color: 'var(--fgColor-muted, var(--color-fg-muted))',
          width: '100%',
        }}
      >
        No results
      </div>
    )
  }

  return results.map((item, index) => (
    <div
      key={item.path}
      {...getItemProps({item, index})}
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 auto',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
        paddingBottom: 8,
        color: 'var(--fgColor-default, var(--color-fg-default))',
        fontSize: 14,
        backgroundColor:
          highlightedIndex === index ? 'var(--bgColor-neutral-muted, var(--color-neutral-muted))' : 'transparent',
        cursor: 'pointer',
        borderRadius: 6,
      }}
    >
      <span style={{fontSize: 12, color: 'var(--fgColor-muted, var(--color-fg-muted))'}}>
        {getBreadcrumbs(siteMetadata.shortName, item.path).join(' / ')}
      </span>
      {item.title}
    </div>
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
