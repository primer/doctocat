import {BorderBox, Flex, Position} from '@primer/components'
import {useScrollRestoration} from 'gatsby'
import React from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import navItems from '../nav.yml'
import {HEADER_HEIGHT} from './header'
import NavItems from './nav-items'

// useScrollRestoration uses .scrollTo() under the hood.
// Edge doesn't support .scrollTo() so we need to polyfill it.
if (typeof window !== 'undefined') {
  smoothscroll.polyfill()
}

function Sidebar() {
  const sidebarScrollRestoration = useScrollRestoration('sidebar')

  return (
    <Position
      position="sticky"
      top={HEADER_HEIGHT}
      height={`calc(100vh - ${HEADER_HEIGHT}px)`}
      minWidth={260}
      color="gray.8"
      bg="gray.0"
    >
      <BorderBox
        borderWidth={0}
        borderRightWidth={1}
        borderRadius={0}
        height="100%"
        style={{overflow: 'auto'}}
        {...sidebarScrollRestoration}
      >
        <Flex flexDirection="column">
          <NavItems items={navItems} />
        </Flex>
      </BorderBox>
    </Position>
  )
}

export default Sidebar
