import {Box, Flex, Link, Sticky, StyledOcticon} from '@primer/components'
import {
  ChevronRight,
  MarkGithub,
  ThreeBars,
  Search as SearchIcon,
} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import primerNavItems from '../primer-nav.yml'
import useSiteMetadata from '../use-site-metadata'
import DarkButton from './dark-button'
import NavDrawer from './nav-drawer'
import NavDropdown, {NavDropdownItem} from './nav-dropdown'
import Search from './search'
import MobileSearch from './mobile-search'

function Header() {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = React.useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false)
  const siteMetadata = useSiteMetadata()
  return (
    <Sticky>
      <Flex
        py={3}
        px={[3, null, null, 4]}
        alignItems="center"
        justifyContent="space-between"
        bg="gray.9"
      >
        <Flex alignItems="center">
          <Link
            href="https://primer.style"
            color="blue.4"
            mr={3}
            lineHeight="condensedUltra"
          >
            <StyledOcticon icon={MarkGithub} size="medium" />
          </Link>
          <Flex display={['none', null, null, 'flex']} alignItems="center">
            <Link href="https://primer.style" color="blue.4" fontFamily="mono">
              Primer
            </Link>
            <StyledOcticon icon={ChevronRight} mx={2} color="blue.4" />
          </Flex>
          <Link as={GatsbyLink} to="/" color="blue.4" fontFamily="mono" mr={4}>
            {siteMetadata.shortName}
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
              aria-label="Search"
              aria-expanded={isMobileSearchOpen}
              onClick={() => setIsMobileSearchOpen(true)}
            >
              <StyledOcticon icon={SearchIcon} />
            </DarkButton>
            <MobileSearch
              isOpen={isMobileSearchOpen}
              onDismiss={() => setIsMobileSearchOpen(false)}
            />
            <DarkButton
              aria-label="Menu"
              aria-expanded={isNavDrawerOpen}
              onClick={() => setIsNavDrawerOpen(true)}
              ml={3}
            >
              <StyledOcticon icon={ThreeBars} />
            </DarkButton>
            <NavDrawer
              isOpen={isNavDrawerOpen}
              onDismiss={() => setIsNavDrawerOpen(false)}
            />
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
            <Box ml={4} key={index}>
              <NavDropdown title={item.title}>
                {item.children.map(child => (
                  <NavDropdownItem key={child.title} href={child.url}>
                    {child.title}
                  </NavDropdownItem>
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
            ml={4}
          >
            {item.title}
          </Link>
        )
      })}
    </Flex>
  )
}

export default Header
