import {BorderBox, Flex, Position} from '@primer/components'
import React from 'react'
import Sidebar from './sidebar'

function StickySidebar() {
  const rootElement = React.useRef(null)
  const {top = 0} = useBoundingClientRect(rootElement)

  return (
    <Position
      ref={rootElement}
      position="sticky"
      top={top}
      height={['auto', 'auto', `calc(100vh - ${top}px)`]}
      minWidth={300}
    >
      <BorderBox border={0} borderRight={1} borderRadius={0} height="100%">
        <Flex height="100%">
          <Sidebar />
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

export default StickySidebar