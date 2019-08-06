import {
  BorderBox,
  Box,
  Details,
  Flex,
  Link,
  StyledOcticon,
  Text,
} from '@primer/components'
import {ChevronDown, ChevronUp, X} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import navItems from '../nav.yml'
import primerNavItems from '../primer-nav.yml'
import useSiteMetadata from '../use-site-metadata'
import DarkButton from './dark-button'
import Drawer from './drawer'
import NavItems from './nav-items'

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
          <BorderBox
            border={0}
            borderRadius={0}
            borderBottom={1}
            borderColor="gray.7"
          >
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
    return (
      <BorderBox
        key={item.title}
        border={0}
        borderRadius={0}
        borderTop={index !== 0 ? 1 : 0}
        borderColor="gray.7"
        p={4}
      >
        {item.children ? (
          <Details key={index}>
            {({open, toggle}) => (
              <>
                <summary onClick={toggle} style={{cursor: 'pointer'}}>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Text>{item.title}</Text>
                    <StyledOcticon icon={open ? ChevronUp : ChevronDown} />
                  </Flex>
                </summary>
                <Flex flexDirection="column" mt={3}>
                  {item.children.map(child => (
                    <Link
                      key={child.title}
                      href={child.url}
                      py={2}
                      fontSize={1}
                      color="inherit"
                    >
                      {child.title}
                    </Link>
                  ))}
                </Flex>
              </>
            )}
          </Details>
        ) : (
          <Link key={index} href={item.url} color="inherit" display="block">
            {item.title}
          </Link>
        )}
      </BorderBox>
    )
  })
}

export default NavDrawer
