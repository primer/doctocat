import {
  BorderBox,
  Flex,
  Link,
  StyledOcticon,
  themeGet,
} from '@primer/components'
import {LinkExternal} from '@primer/octicons-react'
import {graphql, Link as GatsbyLink, useStaticQuery} from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const NavLink = styled(Link)`
  &.active {
    font-weight: ${themeGet('fontWeights.bold')};
    color: ${themeGet('colors.gray.8')};
  }
`

function NavItems({items}) {
  return (
    <>
      {items.map(item => (
        <BorderBox
          key={item.title}
          border={0}
          borderRadius={0}
          borderTop={1}
          p={4}
        >
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
              <Flex flexDirection="column" mt={2}>
                {item.children.map(child => (
                  <NavLink
                    key={child.title}
                    as={GatsbyLink}
                    to={child.url}
                    activeClassName="active"
                    display="block"
                    py={1}
                    mt={2}
                    fontSize={1}
                  >
                    {child.title}
                  </NavLink>
                ))}
              </Flex>
            ) : null}
          </Flex>
        </BorderBox>
      ))}
      <BorderBox border={0} borderRadius={0} borderTop={1} p={4}>
        <GithubLink />
      </BorderBox>
    </>
  )
}

function GithubLink() {
  const data = useStaticQuery(graphql`
    {
      repository {
        url
      }
    }
  `)

  return (
    <Link href={data.repository.url} color="inherit">
      <Flex justifyContent="space-between" alignItems="center">
        GitHub
        <StyledOcticon icon={LinkExternal} color="gray.7"></StyledOcticon>
      </Flex>
    </Link>
  )
}

export default NavItems
