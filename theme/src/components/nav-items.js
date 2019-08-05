import {BorderBox, Flex, Link, themeGet} from '@primer/components'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const NavLink = styled(Link)`
  &.active {
    font-weight: ${themeGet('fontWeights.bold')};
    color: ${themeGet('colors.gray.8')};
  }
`

function NavItems({items}) {
  return items.map(item => (
    <BorderBox key={item.title} border={0} borderRadius={0} borderTop={1} p={4}>
      <Flex flexDirection="column">
        <NavLink
          as={GatsbyLink}
          to={item.url}
          activeClassName="active"
          partiallyActive={true}
          color="inherit"
        >
          {item.title}
        </NavLink>
        {item.children ? (
          <Flex flexDirection="column" mt={3}>
            {item.children.map(child => (
              <NavLink
                py={2}
                fontSize={1}
                display="block"
                key={child.title}
                as={GatsbyLink}
                to={child.url}
                activeClassName="active"
              >
                {child.title}
              </NavLink>
            ))}
          </Flex>
        ) : null}
      </Flex>
    </BorderBox>
  ))
}

export default NavItems
