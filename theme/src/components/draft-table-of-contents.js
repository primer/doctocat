import React from 'react'
import {NavList} from '@primer/react/drafts'
import {useLocation} from '@reach/router'

function TableOfContents({'aria-labelledby': ariaLabelledBy, items}) {
  const location = useLocation()
  const subItems = items.find(x => x.url === location.hash).items

  console.log(items)
  console.log(subItems)
  //find name in items

  return (
    <NavList aria-labelledby={ariaLabelledBy}>
      {subItems.map(item => (
        <NavList.Item key={item.title} href={item.url}>
          {item.title}
        </NavList.Item>
      ))}
    </NavList>
  )
}

export default TableOfContents
