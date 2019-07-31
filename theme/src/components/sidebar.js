import {BorderBox, Flex, Position, Link} from '@primer/components'
import {themeGet} from '@styled-system/theme-get'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import data from '../nav.yml'
import Search from './search'

const NavLink = styled(Link)`
  padding: ${themeGet('space.2')}px 0;
  color: ${themeGet('colors.gray.7')};

  &.active {
    color: ${themeGet('colors.blue.5')};
  }
`

function NavItems({items, ...props}) {
  return items.map(item => (
    <Flex flexDirection="column" key={item.url} {...props}>
      <NavLink as={GatsbyLink} to={item.url} activeClassName="active">
        {item.title}
      </NavLink>
      {item.items ? <NavItems items={item.items} pl={3} /> : null}
    </Flex>
  ))
}

function Sidebar() {
  return (
    <Flex width="100%" flexDirection="column" bg="gray.0">
      <Flex p={4}>
        <Search />
      </Flex>
      <Flex
        flexDirection="column"
        flex="1 1 auto"
        px={4}
        pb={4}
        style={{overflow: 'auto'}}
      >
        <NavItems items={data} />
      </Flex>
    </Flex>
  )
}

export default Sidebar
