import {BorderBox, Flex, Position} from '@primer/components'
import React from 'react'
import Measure from 'react-measure'
import navItems from '../nav.yml'
import NavItems from './nav-items'

function Sidebar() {
  const [top, setTop] = React.useState(0)

  return (
    <Measure bounds={true} onResize={rect => setTop(rect.bounds.top)}>
      {({measureRef}) => (
        <Position
          ref={measureRef}
          position="sticky"
          top={top}
          height={`calc(100vh - ${top}px)`}
          minWidth={280}
          color="gray.8"
          bg="gray.0"
        >
          <BorderBox
            border={0}
            borderRight={1}
            borderRadius={0}
            height="100%"
            style={{overflow: 'auto'}}
          >
            <Flex flexDirection="column" pt={3} pb={4}>
              <NavItems items={navItems} />
            </Flex>
          </BorderBox>
        </Position>
      )}
    </Measure>
  )
}

export default Sidebar
