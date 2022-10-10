import React from 'react'
import {NavList,useFocusZone} from '@primer/react'
import {FocusKeys} from '@primer/behaviors'

function TableOfContents({'aria-labelledby': ariaLabelledBy, items}) {
  const {containerRef} = useFocusZone({bindKeys: FocusKeys.ArrowVertical | FocusKeys.HomeAndEnd})
  return (
    <NavList ref={containerRef} aria-labelledby={ariaLabelledBy}>
      {items.map(item => (
        <NavList.Item key={item.title} href={item.url}>
          {item.title}
        </NavList.Item>
      ))}
    </NavList>
  )
}

export default TableOfContents
