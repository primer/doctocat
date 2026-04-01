import {Button, Link, Text, ThemeProvider} from '@primer/react'
import {ChevronDownIcon, ChevronUpIcon, XIcon} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import debounce from 'lodash.debounce'
import React from 'react'
import navItems from '../nav.yml'
import primerNavItems from '../primer-nav.yml'
import useSiteMetadata from '../use-site-metadata'
import Details from './details'
import Drawer from './drawer'
import NavItems from './nav-items'

export function useNavDrawerState(breakpoint) {
  // Handle string values from themes with units at the end
  if (typeof breakpoint === 'string') {
    breakpoint = parseInt(breakpoint, 10)
  }
  const [isOpen, setOpen] = React.useState(false)

  const onResize = React.useCallback(() => {
    if (window.innerWidth >= breakpoint) {
      setOpen(false)
    }
  }, [setOpen, breakpoint])

  const debouncedOnResize = React.useCallback(debounce(onResize, 250), [onResize])

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('resize', debouncedOnResize)
      return () => {
        // cancel any debounced invocation of the resize handler
        debouncedOnResize.cancel()
        window.removeEventListener('resize', debouncedOnResize)
      }
    }
  }, [isOpen, debouncedOnResize])

  return [isOpen, setOpen]
}

function NavDrawer({isOpen, onDismiss}) {
  const siteMetadata = useSiteMetadata()
  return (
    <Drawer isOpen={isOpen} onDismiss={onDismiss}>
      <div
        style={{
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          flexDirection: 'column',
          height: '100%',
          backgroundColor: 'var(--bgColor-default, var(--color-canvas-default))',
          display: 'flex',
        }}
      >
        <div
          style={{
            flexDirection: 'column',
            flex: '0 0 auto',
            color: 'var(--fgColor-default, var(--color-fg-default))',
            backgroundColor: 'var(--bgColor-default, var(--color-canvas-default))',
            display: 'flex',
          }}
        >
          <div
            style={{
              borderWidth: 0,
              borderRadius: 0,
              borderBottomWidth: '1px',
              borderColor: 'var(--borderColor-muted, var(--color-border-muted))',
              borderStyle: 'solid',
            }}
          >
            <div
              style={{
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 24,
                paddingRight: 16,
                alignItems: 'center',
                justifyContent: 'space-between',
                display: 'flex',
              }}
            >
              <Link href="https://primer.style" style={{fontWeight: 'bold', color: 'inherit'}}>
                Primer
              </Link>
              <Button aria-label="Close" onClick={onDismiss}>
                <XIcon />
              </Button>
            </div>
          </div>
          <div style={{flexDirection: 'column', display: 'flex'}}>
            <PrimerNavItems items={primerNavItems} />
          </div>
        </div>
        {navItems.length > 0 ? (
          <ThemeProvider colorMode="day">
            <div
              style={{
                flexDirection: 'column',
                flex: '1 0 auto',
                color: 'var(--fgColor-default, var(--color-fg-default))',
                backgroundColor: 'var(--bgColor-default, var(--color-canvas-default))',
                display: 'flex',
              }}
            >
              <Link
                as={GatsbyLink}
                to="/"
                style={{
                  display: 'inline-block',
                  color: 'inherit',
                  fontWeight: 'bold',
                  marginLeft: 24,
                  marginRight: 24,
                  marginTop: 24,
                }}
              >
                {siteMetadata.title}
              </Link>
              <div style={{paddingLeft: 8, paddingRight: 8}}>
                <NavItems items={navItems} />
              </div>
            </div>
          </ThemeProvider>
        ) : null}
      </div>
    </Drawer>
  )
}

function PrimerNavItems({items}) {
  return items.map((item, index) => {
    return (
      <div
        key={item.title}
        style={{
          borderWidth: 0,
          borderRadius: 0,
          borderTopWidth: index !== 0 ? '1px' : 0,
          borderColor: 'var(--borderColor-muted, var(--color-border-muted))',
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 16,
          paddingBottom: 16,
          borderStyle: 'solid',
        }}
      >
        {item.children ? (
          <Details key={index}>
            {({open, toggle}) => (
              <>
                <summary style={{cursor: 'pointer'}}>
                  <div style={{alignItems: 'center', justifyContent: 'space-between', display: 'flex'}}>
                    <Text>{item.title}</Text>
                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </div>
                </summary>
                <div style={{flexDirection: 'column', marginTop: 8, display: 'flex'}}>
                  {item.children.map(child => (
                    <Link
                      key={child.title}
                      href={child.url}
                      style={{paddingTop: 4, paddingBottom: 4, marginTop: 8, fontSize: 14, color: 'inherit'}}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </Details>
        ) : (
          <Link key={index} href={item.url} style={{color: 'inherit', display: 'block'}}>
            {item.title}
          </Link>
        )}
      </div>
    )
  })
}

export default NavDrawer
