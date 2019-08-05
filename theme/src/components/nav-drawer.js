import {
  BorderBox,
  Box,
  Details,
  Flex,
  Link,
  StyledOcticon,
  Text,
  themeGet,
} from '@primer/components'
import {ChevronDown, ChevronUp, X} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import navItems from '../nav.yml'
import primerNavItems from '../primer-nav.yml'
import useSiteMetadata from '../use-site-metadata'
import Drawer from './drawer'
import NavItems from './nav-items'
import NavItem from './nav-item'
import DarkButton from './dark-button'

const DarkNavItem = styled(NavItem)`
  &:hover {
    background-color: ${themeGet('colors.gray.8')};
  }
`

function NavDrawer({isOpen, onDismiss}) {
  const siteMetadata = useSiteMetadata()
  return (
    <Drawer isOpen={isOpen} onDismiss={onDismiss}>
      <Box
        maxHeight="100vh"
        bg="gray.9"
        style={{overflow: 'auto', WebkitOverflowScrolling: 'touch'}}
      >
        <Flex flexDirection="column" color="blue.2" bg="gray.9">
          <BorderBox border={0} borderBottom={1} borderColor="gray.7">
            <Flex
              py={3}
              px={4}
              alignItems="center"
              justifyContent="space-between"
            >
              <Link
                href="https://primer.style"
                fontFamily="mono"
                color="inherit"
              >
                Primer
              </Link>
              <DarkButton aria-label="Close" onClick={onDismiss}>
                <StyledOcticon icon={X} />
              </DarkButton>
            </Flex>
          </BorderBox>
          <Flex flexDirection="column">
            <PrimerNavItems items={primerNavItems} />
          </Flex>
        </Flex>
        <Flex flexDirection="column" py={4} color="gray.7" bg="gray.0">
          <Link
            as={GatsbyLink}
            to="/"
            display="inline-block"
            color="inherit"
            fontFamily="mono"
            mx={4}
            mb={4}
          >
            {siteMetadata.title}
          </Link>
          <NavItems items={navItems} />
        </Flex>
      </Box>
    </Drawer>
  )
}

function PrimerNavItems({items}) {
  return items.map((item, index) => {
    if (item.children) {
      return (
        <BorderBox
          key={item.title}
          border={0}
          borderRadius={0}
          borderTop={index !== 0 ? 1 : 0}
          borderColor="gray.7"
        >
          <Details key={index}>
            {({open, toggle}) => (
              <>
                <DarkNavItem as="summary" onClick={toggle}>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Text fontWeight="bold">{item.title}</Text>
                    <StyledOcticon icon={open ? ChevronUp : ChevronDown} />
                  </Flex>
                </DarkNavItem>
                <Flex flexDirection="column" pb={3}>
                  {item.children.map(child => (
                    <DarkNavItem
                      key={child.title}
                      href={child.url}
                      depth={1}
                      color="inherit"
                      py={2}
                    >
                      {child.title}
                    </DarkNavItem>
                  ))}
                </Flex>
              </>
            )}
          </Details>
        </BorderBox>
      )
    }

    return (
      <BorderBox
        key={item.title}
        border={0}
        borderRadius={0}
        borderTop={index !== 0 ? 1 : 0}
        borderColor="gray.7"
      >
        <DarkNavItem
          key={index}
          href={item.url}
          display="block"
          color="inherit"
          fontWeight="bold"
        >
          {item.title}
        </DarkNavItem>
      </BorderBox>
    )
  })
}

export default NavDrawer
