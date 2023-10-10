import {Box, Button, Link, Text, ThemeProvider} from '@primer/react'
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
      <Box
        style={{overflow: 'auto', WebkitOverflowScrolling: 'touch'}}
        sx={{flexDirection: 'column', height: '100%', bg: 'canvas.default', display: 'flex'}}
      >
        <Box
          sx={{flexDirection: 'column', flex: '0 0 auto', color: 'fg.default', bg: 'canvas.default', display: 'flex'}}
        >
          <Box
            sx={{
              borderWidth: 0,
              borderRadius: 0,
              borderBottomWidth: 1,
              borderColor: 'border.muted',
              borderStyle: 'solid'
            }}
          >
            <Box sx={{py: 3, pl: 4, pr: 3, alignItems: 'center', justifyContent: 'space-between', display: 'flex'}}>
              <Link href="https://primer.style" sx={{fontWeight: 'bold', color: 'inherit'}}>
                Primer
              </Link>
              <Button aria-label="Close" onClick={onDismiss}>
                <XIcon />
              </Button>
            </Box>
          </Box>
          <Box sx={{flexDirection: 'column', display: 'flex'}}>
            <PrimerNavItems items={primerNavItems} />
          </Box>
        </Box>
        {navItems.length > 0 ? (
          <ThemeProvider colorMode="day">
            <Box
              sx={{
                flexDirection: 'column',
                flex: '1 0 auto',
                color: 'fg.default',
                bg: 'canvas.default',
                display: 'flex'
              }}
            >
              <Link
                as={GatsbyLink}
                to="/"
                sx={{display: 'inline-block', color: 'inherit', fontWeight: 'bold', mx: 4, mt: 4}}
              >
                {siteMetadata.title}
              </Link>
              <Box sx={{px: 2}}>
                <NavItems items={navItems} />
              </Box>
            </Box>
          </ThemeProvider>
        ) : null}
      </Box>
    </Drawer>
  )
}

function PrimerNavItems({items}) {
  return items.map((item, index) => {
    return (
      <Box
        key={item.title}
        sx={{
          borderWidth: 0,
          borderRadius: 0,
          borderTopWidth: index !== 0 ? 1 : 0,
          borderColor: 'border.muted',
          px: 4,
          py: 3,
          borderStyle: 'solid'
        }}
      >
        {item.children ? (
          <Details key={index}>
            {({open, toggle}) => (
              <>
                {/* Disabled linging rule due to bug with summary: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/656 */}
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <summary onClick={toggle} onKeyDown={toggle} style={{cursor: 'pointer'}}>
                  <Box sx={{alignItems: 'center', justifyContent: 'space-between', display: 'flex'}}>
                    <Text>{item.title}</Text>
                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </Box>
                </summary>
                <Box sx={{flexDirection: 'column', mt: 2, display: 'flex'}}>
                  {item.children.map(child => (
                    <Link key={child.title} href={child.url} sx={{py: 1, mt: 2, fontSize: 1, color: 'inherit'}}>
                      {child.title}
                    </Link>
                  ))}
                </Box>
              </>
            )}
          </Details>
        ) : (
          <Link key={index} href={item.url} sx={{color: 'inherit', display: 'block'}}>
            {item.title}
          </Link>
        )}
      </Box>
    )
  })
}

export default NavDrawer
