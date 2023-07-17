import {MarkGithubIcon, SearchIcon, ThreeBarsIcon} from '@primer/octicons-react'
import {Box, Button, Link, StyledOcticon, Text, ThemeProvider, useTheme} from '@primer/react'
import VisuallyHidden from './visually-hidden'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import primerNavItems from '../primer-nav.yml'
import useSiteMetadata from '../use-site-metadata'
import MobileSearch from './mobile-search'
import NavDrawer, {useNavDrawerState} from './nav-drawer'
import NavDropdown, {NavDropdownItem} from './nav-dropdown'
import Search from './search'
import SkipLink from './skip-link'

export const HEADER_HEIGHT = 66

function Header({isSearchEnabled}) {
  const {theme} = useTheme()
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useNavDrawerState(theme.breakpoints[2])
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false)
  const siteMetadata = useSiteMetadata()
  return (
    <ThemeProvider colorMode="night" nightScheme="dark_dimmed">
      <Box sx={{position: 'sticky', top: 0, zIndex: 1}}>
        <Box
          as="header"
          sx={{
            display: 'flex',
            height: HEADER_HEIGHT,
            px: [3, null, null, 4],
            alignItems: 'center',
            justifyContent: 'space-between',
            bg: 'canvas.default'
          }}
        >
          <SkipLink />
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Link
              href={siteMetadata.header.logoUrl}
              sx={{
                color: 'accent.fg',
                mr: 3,
                lineHeight: 'condensedUltra'
              }}
            >
              <StyledOcticon icon={MarkGithubIcon} size="medium" />
            </Link>
            {siteMetadata.header.title ? (
              <Link
                href={siteMetadata.header.url}
                sx={{
                  color: 'accent.fg',
                  display: [
                    // We only hide "Primer" on small viewports if a shortName is defined.
                    siteMetadata.shortName ? 'none' : 'inline-block',
                    null,
                    null,
                    'inline-block'
                  ]
                }}
              >
                {siteMetadata.header.title}
              </Link>
            ) : null}
            {siteMetadata.shortName ? (
              <>
                {siteMetadata.header.title && (
                  <Text
                    sx={{
                      display: ['none', null, null, 'inline-block'],
                      color: 'accent.fg',
                      mx: 2
                    }}
                  >
                    /
                  </Text>
                )}
                <Link
                  as={GatsbyLink}
                  to="/"
                  sx={{
                    color: 'accent.fg'
                  }}
                >
                  {siteMetadata.shortName}
                </Link>
              </>
            ) : null}

            {isSearchEnabled ? (
              <Box sx={{display: ['none', null, null, 'block'], ml: 4}}>
                <Search />
              </Box>
            ) : null}
          </Box>
          <Box>
            <Box sx={{display: ['none', null, null, 'block']}}>
              <PrimerNavItems siteMetadata={siteMetadata} items={primerNavItems} />
            </Box>
            <Box sx={{display: ['flex', null, null, 'none']}}>
              {isSearchEnabled ? (
                <>
                  <Button
                    aria-label="Search"
                    aria-expanded={isMobileSearchOpen}
                    onClick={() => setIsMobileSearchOpen(true)}
                    sx={{
                      ml: 3
                    }}
                  >
                    <SearchIcon />
                  </Button>
                  <MobileSearch isOpen={isMobileSearchOpen} onDismiss={() => setIsMobileSearchOpen(false)} />
                </>
              ) : null}
              <Button
                aria-label="Menu"
                aria-expanded={isNavDrawerOpen}
                onClick={() => setIsNavDrawerOpen(true)}
                sx={{
                  ml: 3
                }}
              >
                <ThreeBarsIcon />
              </Button>
              <NavDrawer isOpen={isNavDrawerOpen} onDismiss={() => setIsNavDrawerOpen(false)} />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

Header.defaultProps = {
  isSearchEnabled: true
}

function PrimerNavItems({siteMetadata, items}) {
  return (
    <>
      <VisuallyHidden>
        <h3 aria-labelledby="site-header">{siteMetadata.header.title} </h3>
      </VisuallyHidden>
      <Box
        as={'nav'}
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'fg.default', gap: 2}}
      >
        {items.map((item, index) => {
          if (item.children) {
            return (
              <Box key={index}>
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
              sx={{
                display: 'block',
                color: 'fg.default',
                fontSize: 2,
                fontWeight: 'bold',
                ml: 2,
                mr: 2
              }}
            >
              {item.title}
            </Link>
          )
        })}
      </Box>
    </>
  )
}

export default Header
