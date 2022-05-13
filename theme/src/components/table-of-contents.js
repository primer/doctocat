import {Box, Link} from '@primer/react'
import React from 'react'
import {NavList} from '@primer/react/drafts'

function TableOfContents({'aria-labelledby': ariaLabelledBy, items, depth}) {
  return (
    <NavList aria-labelledby={ariaLabelledBy}>
      {items.map(item => (
        <NavList.Item key={item.title} href={item.url}>
          {item.title}
        </NavList.Item>
      ))}
    </NavList>
  )
}

TableOfContents.defaultProps = {
  depth: 0
}

export default TableOfContents
