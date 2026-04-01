import {MarkGithubIcon, SearchIcon, ThreeBarsIcon} from '@primer/octicons-react'
import {Button, Link, Text, ThemeProvider, useTheme, UnderlineNav} from '@primer/react'
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
      <div style={{position: 'sticky', top: 0, zIndex: 1}}>
        <header
          style={{
            display: 'flex',
            height: HEADER_HEIGHT,
            // className="header-px": add CSS for px:3 (12px) on mobile
            paddingLeft: 24,
            paddingRight: 24,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bgColor-default, var(--color-canvas-default))',
            border: '1px solid var(--borderColor-muted, var(--color-border-muted))',
          }}
        >
          <SkipLink />
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Link
              href={siteMetadata.header.logoUrl}
              style={{
                color: 'var(--fgColor-default, var(--color-fg-default))',
                marginRight: 16,
                lineHeight: 1,
              }}
            >
              <MarkGithubIcon size={24} />
            </Link>
            {siteMetadata.header.title ? (
              <Link
                href={siteMetadata.header.url}
                style={{
                  color: 'var(--fgColor-default, var(--color-fg-default))',
                  fontWeight: 'bold',
                  display: 'inline-block',
                }}
              >
                {siteMetadata.header.title}
              </Link>
            ) : null}
            {siteMetadata.shortName ? (
              <>
                {siteMetadata.header.title && (
                  <Text
                    style={{
                      display: 'inline-block',
                      color: 'var(--fgColor-default, var(--color-fg-default))',
                      marginLeft: 8,
                      marginRight: 8,
                    }}
                  >
                    /
                  </Text>
                )}
                <Link
                  as={GatsbyLink}
                  to="/"
                  style={{
                    fontWeight: 'bold',
                    color: 'var(--fgColor-default, var(--color-fg-default))',
                  }}
                >
                  {siteMetadata.shortName}
                </Link>
              </>
            ) : null}
          </div>
          <div>
            <div className="desktop-nav" style={{alignItems: 'center'}}>
              <PrimerNavItems path={path} siteMetadata={siteMetadata} pathPrefix={pathPrefix} items={primerNavItems} />
              {isSearchEnabled ? (
                <div className="desktop-search" style={{marginLeft: 16}}>
                  <Search />
                </div>
              ) : null}
            </div>
            <div className="mobile-controls">
              {isSearchEnabled ? (
                <>
                  <Button
                    aria-label="Search"
                    aria-expanded={isMobileSearchOpen}
                    onClick={() => setIsMobileSearchOpen(true)}
                    style={{marginLeft: 16}}
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
                style={{marginLeft: 16}}
              >
                <ThreeBarsIcon />
              </Button>
              <NavDrawer isOpen={isNavDrawerOpen} onDismiss={() => setIsNavDrawerOpen(false)} />
            </div>
          </div>
        </header>
      </div>
    </ThemeProvider>
  )
}

Header.defaultProps = {
  isSearchEnabled: true,
}

function PrimerNavItems({siteMetadata, items, path, pathPrefix}) {
  return (
    <>
      <VisuallyHidden>
        <h3 aria-labelledby="site-header">{siteMetadata.header.title} </h3>
      </VisuallyHidden>
      <UnderlineNav aria-label="Main navigation" style={{border: 'none'}}>
        {items.map((item, index) => {
          return (
            <UnderlineNav.Item
              key={index}
              href={item.url}
              selected={item.url === siteMetadata.header.url + (pathPrefix || '') + (path || '')}
              style={{fontSize: 16, lineHeight: '1.25'}}
            >
              {item.title}
            </UnderlineNav.Item>
          )
        })}
      </UnderlineNav>
    </>
  )
}

export default Header
