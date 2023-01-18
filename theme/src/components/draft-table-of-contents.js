import React from 'react'
import {NavList} from '@primer/react/drafts'
import {useLocation} from '@reach/router'

const getSubItems = (items, location) => {
  if (location.hash === '') {
    return items[0].items
  } else {
    let subItems = items.find(x => x.url === location.hash)
    return subItems !== undefined
      ? subItems.items
      : items.find(item => item.items.some(x => x.url === location.hash)).items
  }
}

function DraftTableOfContents({'aria-labelledby': ariaLabelledBy, items}) {
  const location = useLocation()
  const subItems = getSubItems(items, location)

  return (
    <NavList>
      {subItems.map(item => (
        <NavList.Item key={item.title} href={item.url}>
          {item.title}
        </NavList.Item>
      ))}
    </NavList>
  )
}

export default DraftTableOfContents
