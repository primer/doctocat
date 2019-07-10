import {Flex} from '@primer/components'
import {themeGet} from '@styled-system/theme-get'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import data from '../nav.yml'

const NavLink = styled.a`
  padding: ${themeGet('space.1')}px 0;
  color: ${themeGet('colors.gray.7')};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: ${themeGet('colors.blue.5')};
  }
`

function Navigation({items, ...props}) {
  return items.map(item => (
    <Flex flexDirection="column" key={item.url} {...props}>
      <NavLink as={GatsbyLink} to={item.url} activeClassName="active">
        {item.title}
      </NavLink>
      {item.items ? <Navigation items={item.items} pl={3} /> : null}
    </Flex>
  ))
}

function Sidebar() {
  return (
    <Flex flexDirection="column" width="100%" p={4} bg="gray.1">
      <Navigation items={data} />
    </Flex>
  )
}

export default Sidebar
