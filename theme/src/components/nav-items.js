import {Link} from 'gatsby'
import React from 'react'
import NavItem from './nav-item'

function NavItems({items, depth = 0}) {
  return items.map(item => (
    <React.Fragment key={item.title}>
      <NavItem
        as={Link}
        to={item.url}
        depth={depth}
        activeClassName="active"
        mt={depth === 0 ? 2 : 0}
        fontWeight={depth === 0 ? 'bold' : 'normal'}
      >
        {item.title}
      </NavItem>
      {item.children ? (
        <NavItems items={item.children} depth={depth + 1} />
      ) : null}
    </React.Fragment>
  ))
}

export default NavItems
