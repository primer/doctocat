import {Box, Flex, Link, Sticky, StyledOcticon} from '@primer/components'
import {ChevronRight, MarkGithub, ThreeBars} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import primerNavItems from '../primer-nav.yml'
import useSiteMetadata from '../use-site-metadata'
import NavDrawer from './nav-drawer'
import NavItem from './nav-item'
import Search from './search'
import DarkButton from './dark-button'
import NavDropdown from './nav-dropdown'

function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const siteMetadata = useSiteMetadata()
  return (
    <Sticky>
      <Flex
        px={4}
        py={3}
        alignItems="center"
        justifyContent="space-between"
        bg="gray.9"
      >
        <Flex alignItems="center">
          <Link href="https://primer.style" color="blue.4" mr={3}>
            <StyledOcticon icon={MarkGithub} size="medium" />
          </Link>
          <Flex display={['none', null, 'flex']} alignItems="center">
            <Link href="https://primer.style" color="blue.4" fontFamily="mono">
              Primer
            </Link>
            <StyledOcticon icon={ChevronRight} mx={2} color="blue.4" />
          </Flex>
          <Link as={GatsbyLink} to="/" color="blue.4" fontFamily="mono" mr={4}>
            {siteMetadata.title}
          </Link>
          <Box display={['none', null, null, 'block']}>
            <Search />
          </Box>
        </Flex>
        <Flex>
          <Box display={['none', null, null, 'block']}>
            <PrimerNavItems items={primerNavItems} />
          </Box>
          <Flex display={['flex', null, null, 'none']}>
            <DarkButton
              aria-label="Menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
            >
              <StyledOcticon icon={ThreeBars} />
            </DarkButton>
            <NavDrawer isOpen={isOpen} onDismiss={() => setIsOpen(false)} />
          </Flex>
        </Flex>
      </Flex>
    </Sticky>
  )
}

function PrimerNavItems({items}) {
  return (
    <Flex alignItems="center" color="blue.2">
      {items.map((item, index) => {
        if (item.children) {
          return (
            <Box ml={2} key={index}>
              <NavDropdown title={item.title}>
                {item.children.map(child => (
                  <NavItem key={child.title} href={child.url} py={2} px={3}>
                    {child.title}
                  </NavItem>
                ))}
              </NavDropdown>
            </Box>
          )
        }

        return (
          <Link
            key={index}
            href={item.url}
            display="block"
            color="inherit"
            ml={2}
            px={2}
          >
            {item.title}
          </Link>
        )
      })}
    </Flex>
  )
}

export default Header
