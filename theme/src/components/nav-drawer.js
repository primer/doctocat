import {BorderBox, Flex, Link, Text, Button, ThemeProvider} from '@primer/components'
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
  }, [setOpen])

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
      <Flex
        style={{overflow: 'auto', WebkitOverflowScrolling: 'touch'}}
        sx={{flexDirection: 'column', height: '100%', bg: 'canvas.default'}}
      >
        <Flex sx={{flexDirection: 'column', flex: '0 0 auto', color: 'fg.default', bg: 'canvas.default'}}>
          <BorderBox sx={{borderWidth: 0, borderRadius: 0, borderBottomWidth: 1, borderColor: 'border.muted'}}>
            <Flex sx={{py: 3, pl: 4, pr: 3, alignItems: 'center', justifyContent: 'space-between'}}>
              <Link href="https://primer.style" sx={{fontFamily: 'mono', color: 'inherit'}}>
                Primer
              </Link>
              <Button aria-label="Close" onClick={onDismiss}>
                <XIcon />
              </Button>
            </Flex>
          </BorderBox>
          <Flex sx={{flexDirection: 'column'}}>
            <PrimerNavItems items={primerNavItems} />
          </Flex>
        </Flex>
        {navItems.length > 0 ? (
          <ThemeProvider colorMode="day">
            <Flex sx={{flexDirection: 'column', flex: '1 0 auto', color: 'fg.default', bg: 'canvas.default'}}>
              <Link
                as={GatsbyLink}
                to="/"
                sx={{display: 'inline-block', color: 'inherit', fontFamily: 'mono', mx: 4, my: 4}}
              >
                {siteMetadata.title}
              </Link>
              <NavItems items={navItems} />
            </Flex>
          </ThemeProvider>
        ) : null}
      </Flex>
    </Drawer>
  )
}

function PrimerNavItems({items}) {
  return items.map((item, index) => {
    return (
      <BorderBox
        key={item.title}
        sx={{borderWidth: 0, borderRadius: 0, borderTopWidth: index !== 0 ? 1 : 0, borderColor: 'border.muted', p: 4}}
      >
        {item.children ? (
          <Details key={index}>
            {({open, toggle}) => (
              <>
                <summary onClick={toggle} style={{cursor: 'pointer'}}>
                  <Flex sx={{alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text>{item.title}</Text>
                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </Flex>
                </summary>
                <Flex sx={{flexDirection: 'column', mt: 2}}>
                  {item.children.map(child => (
                    <Link key={child.title} href={child.url} sx={{py: 1, mt: 2, fontSize: 1, color: 'inherit'}}>
                      {child.title}
                    </Link>
                  ))}
                </Flex>
              </>
            )}
          </Details>
        ) : (
          <Link key={index} href={item.url} sx={{color: 'inherit', display: 'block'}}>
            {item.title}
          </Link>
        )}
      </BorderBox>
    )
  })
}

export default NavDrawer
