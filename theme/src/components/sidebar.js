import {BorderBox, Flex, Position} from '@primer/components'
import React from 'react'
import navItems from '../nav.yml'
import NavItems from './nav-items'

function Sidebar() {
  const rootElement = React.useRef(null)
  const {top = 0} = useBoundingClientRect(rootElement)

  return (
    <Position
      ref={rootElement}
      position="sticky"
      top={top}
      height={['auto', 'auto', `calc(100vh - ${top}px)`]}
      minWidth={280}
      color="gray.8"
      bg="gray.0"
    >
      <BorderBox border={0} borderRight={1} borderRadius={0} height="100%">
        <Flex flexDirection="column" pt={3} pb={4}>
          <NavItems items={navItems} />
        </Flex>
      </BorderBox>
    </Position>
  )
}

function useBoundingClientRect(ref) {
  const [boundingClientRect, setBoundingClientRect] = React.useState({})

  React.useEffect(() => {
    if (ref.current) {
      setBoundingClientRect(ref.current.getBoundingClientRect())
    }
  })

  return boundingClientRect
}

export default Sidebar
