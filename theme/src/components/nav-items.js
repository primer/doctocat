import {Link} from 'gatsby'
import React from 'react'
import NavItem from './nav-item'
import NavSubitem from './nav-subitem'
import {BorderBox} from '@primer/components'

function NavItems({items, depth = 0}) {
  return items.map(item => (
    <BorderBox
      key={item.title}
      border={0}
      borderRadius={0}
      borderTop={1}
      pb={item.children ? 3 : 0}
    >
      <NavItem
        as={Link}
        to={item.url}
        depth={depth}
        activeClassName="active"
        py={depth === 0 ? 3 : 2}
        fontWeight={depth === 0 ? 'bold' : 'normal'}
        // fontSize={depth === 0 ? 2 : 1}
        partiallyActive={true}
      >
        {item.title}
      </NavItem>
      {item.children
        ? item.children.map(child => (
            <NavSubitem
              key={child.title}
              as={Link}
              to={child.url}
              activeClassName="active"
            >
              {child.title}
            </NavSubitem>
          ))
        : null}
    </BorderBox>
  ))
}

export default NavItems