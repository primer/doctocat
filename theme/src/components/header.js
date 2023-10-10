import {MarkGithubIcon, SearchIcon, ThreeBarsIcon} from '@primer/octicons-react'
import {Box, Button, Link, StyledOcticon, Text, ThemeProvider, useTheme, UnderlineNav} from '@primer/react'
import VisuallyHidden from './visually-hidden'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import primerNavItems from '../primer-nav.yml'
import useSiteMetadata from '../use-site-metadata'
import usePathPrefix from '../use-path-prefix'
import MobileSearch from './mobile-search'
import NavDrawer, {useNavDrawerState} from './nav-drawer'
import Search from './search'
import SkipLink from './skip-link'

export const HEADER_HEIGHT = 56

function Header({isSearchEnabled, path}) {
  const {theme} = useTheme()
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useNavDrawerState(theme.breakpoints[2])
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false)
  const siteMetadata = useSiteMetadata()
  const pathPrefix = usePathPrefix()

  return (
    <ThemeProvider>
      <Box sx={{position: 'sticky', top: 0, zIndex: 1}}>
        <Box
          as="header"
          sx={{
            display: 'flex',
            height: HEADER_HEIGHT,
            px: [3, null, null, 4],
            alignItems: 'center',
            justifyContent: 'space-between',
            bg: 'canvas.default',
            border: '1px solid',
            borderColor: 'border.muted',
          }}
        >
          <SkipLink />
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Link
              href={siteMetadata.header.logoUrl}
              sx={{
                color: 'fg.default',
                mr: 3,
                lineHeight: 'condensedUltra',
              }}
            >
              <StyledOcticon icon={MarkGithubIcon} size="24px" />
            </Link>
            {siteMetadata.header.title ? (
              <Link
                href={siteMetadata.header.url}
                sx={{
                  color: 'fg.default',
                  fontWeight: 'bold',
                  display: [
                    // We only hide "Primer" on small viewports if a shortName is defined.
                    siteMetadata.shortName ? 'none' : 'inline-block',
                    null,
                    null,
                    'inline-block',
                  ],
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
                      color: 'fg.default',
                      mx: 2,
                    }}
                  >
                    /
                  </Text>
                )}
                <Link
                  as={GatsbyLink}
                  to="/"
                  sx={{
                    fontWeight: 'bold',
                    color: 'fg.default',
                  }}
                >
                  {siteMetadata.shortName}
                </Link>
              </>
            ) : null}
          </Box>
          <Box>
            <Box sx={{display: ['none', null, null, 'flex'], alignItems: 'center'}}>
              <PrimerNavItems path={path} siteMetadata={siteMetadata} pathPrefix={pathPrefix} items={primerNavItems} />
              {isSearchEnabled ? (
                <Box sx={{display: ['none', null, null, 'block'], ml: 3}}>
                  <Search />
                </Box>
              ) : null}
            </Box>
            <Box sx={{display: ['flex', null, null, 'none']}}>
              {isSearchEnabled ? (
                <>
                  <Button
                    aria-label="Search"
                    aria-expanded={isMobileSearchOpen}
                    onClick={() => setIsMobileSearchOpen(true)}
                    sx={{
                      ml: 3,
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
                  ml: 3,
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
  isSearchEnabled: true,
}

function PrimerNavItems({siteMetadata, items, path, pathPrefix}) {
  console.log('header url', siteMetadata.header.url)
  console.log('pathPrefix', pathPrefix)
  console.log('path', path)

  return (
    <>
      <VisuallyHidden>
        <h3 aria-labelledby="site-header">{siteMetadata.header.title} </h3>
      </VisuallyHidden>
      <UnderlineNav aria-label="main navigation" sx={{border: 'none'}}>
        {items.map((item, index) => {
          return (
            <UnderlineNav.Link
              key={index}
              href={item.url}
              selected={item.url === siteMetadata.header.url + (pathPrefix || '') + (path || '')}
              sx={{fontSize: 2, lineHeight: 'condensed'}}
            >
              {item.title}
            </UnderlineNav.Link>
          )
        })}
      </UnderlineNav>
    </>
  )
}

export default Header
