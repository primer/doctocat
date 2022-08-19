import React from 'react'
import {NavList} from '@primer/react/drafts'

function TableOfContents({'aria-labelledby': ariaLabelledBy, items}) {
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

export default TableOfContents
