import {MarkGithubIcon, SearchIcon, ThreeBarsIcon} from '@primer/octicons-react'
import {Box, Button, Link, StyledOcticon, Text, ThemeProvider, useTheme} from '@primer/react'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import primerNavItems from '../primer-nav.yml'
import useSiteMetadata from '../use-site-metadata'
import MobileSearch from './mobile-search'
import NavDrawer, {useNavDrawerState} from './nav-drawer'
import NavDropdown, {NavDropdownItem} from './nav-dropdown'
import Search from './search'

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
          sx={{
            display: 'flex',
            height: HEADER_HEIGHT,
            px: [3, null, null, 4],
            alignItems: 'center',
            justifyContent: 'space-between',
            bg: 'canvas.default'
          }}
        >
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Link
              href="https://primer.style"
              sx={{
                color: 'accent.fg',
                mr: 3,
                lineHeight: 'condensedUltra'
              }}
            >
              <StyledOcticon icon={MarkGithubIcon} size="medium" />
            </Link>
            <Link
              href="https://primer.style"
              sx={{
                color: 'accent.fg',
                fontFamily: 'mono',
                display: [
                  // We only hide "Primer" on small viewports if a shortName is defined.
                  siteMetadata.shortName ? 'none' : 'inline-block',
                  null,
                  null,
                  'inline-block'
                ]
              }}
            >
              Primer
            </Link>

            {siteMetadata.shortName ? (
              <>
                <Text
                  sx={{display: ['none', null, null, 'inline-block'], color: 'accent.fg', fontFamily: 'mono', mx: 2}}
                >
                  /
                </Text>
                <Link
                  as={GatsbyLink}
                  to="/"
                  sx={{
                    color: 'accent.fg',
                    fontFamily: 'mono'
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
              <PrimerNavItems items={primerNavItems} />
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

function PrimerNavItems({items}) {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', color: 'fg.default'}}>
      {items.map((item, index) => {
        if (item.children) {
          return (
            <Box key={index} sx={{ml: 4}}>
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
              color: 'inherit',
              ml: 4
            }}
          >
            {item.title}
          </Link>
        )
      })}
    </Box>
  )
}

export default Header
