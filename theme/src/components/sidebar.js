import {BorderBox, Flex, Position} from '@primer/react'
import React from 'react'
import navItems from '../nav.yml'
import {HEADER_HEIGHT} from './header'
import NavItems from './nav-items'

function usePersistentScroll(id) {
  const ref = React.useRef()

  const handleScroll = React.useCallback(
    // Save scroll position in session storage on every scroll change
    event => window.sessionStorage.setItem(id, event.target.scrollTop),
    [id]
  )

  React.useLayoutEffect(() => {
    // Restore scroll position when component mounts
    const scrollPosition = window.sessionStorage.getItem(id)
    if (scrollPosition && ref.current) {
      ref.current.scrollTop = scrollPosition
    }
  }, [])

  // Return props to spread onto the scroll container
  return {
    ref,
    onScroll: handleScroll
  }
}

function Sidebar() {
  const scrollContainerProps = usePersistentScroll('sidebar')

  return (
    <Position
      sx={{
        position: 'sticky',
        top: HEADER_HEIGHT,
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        minWidth: 260
      }}
    >
      <BorderBox
        {...scrollContainerProps}
        style={{overflow: 'auto'}}
        sx={{borderWidth: 0, borderRightWidth: 1, borderRadius: 0, height: '100%'}}
      >
        <Flex sx={{flexDirection: 'column'}}>
          <NavItems items={navItems} />
        </Flex>
      </BorderBox>
    </Position>
  )
}

export default Sidebar
