import {BorderBox, Flex, Position} from '@primer/components'
import React from 'react'
import {useScrollRestoration} from 'gatsby'
import navItems from '../nav.yml'
import {HEADER_HEIGHT} from './header'
import NavItems from './nav-items'

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
