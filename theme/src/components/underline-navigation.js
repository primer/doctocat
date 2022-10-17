import React from 'react'
import {UnderlineNav} from '@primer/react'
import {useLocation} from '@reach/router'

export function UnderlineNavigation({items}) {
  const location = useLocation()

  return (
    <UnderlineNav aria-label="Page navigation" sx={{position: 'sticky', top: '66px', background: '#ffffff'}}>
      {items.map((item, i) => (
        <UnderlineNav.Link
          key={item.title}
          href={item.url}
          selected={location.hash === item.url || (i === 0 && location.hash === '')}
        >
          {item.title}
        </UnderlineNav.Link>
      ))}
    </UnderlineNav>
  )
}

export default UnderlineNavigation
