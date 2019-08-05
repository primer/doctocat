import {Link} from 'gatsby'
import React from 'react'
import NavItem from './nav-item'
import {BorderBox} from '@primer/components'

function NavItems({items, depth = 0}) {
  return items.map(item => (
    <BorderBox
      key={item.title}
      border={0}
      borderRadius={0}
      borderTop={depth === 0 ? 1 : 0}
      pb={depth === 0 && item.children ? 3 : 0}
    >
      <NavItem
        as={Link}
        to={item.url}
        depth={depth}
        activeClassName="active"
        py={depth === 0 ? 3 : 2}
        fontWeight={depth === 0 ? 'bold' : 'normal'}
        // fontSize={depth === 0 ? 2 : 1}
      >
        {item.title}
      </NavItem>
      {item.children ? (
        <NavItems items={item.children} depth={depth + 1} />
      ) : null}
    </BorderBox>
  ))
}

export default NavItems
