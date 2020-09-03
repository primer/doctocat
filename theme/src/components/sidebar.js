import {BorderBox, Flex, Position} from '@primer/components'
import React from 'react'
import navItems from '../nav.yml'
import {HEADER_HEIGHT} from './header'
import NavItems from './nav-items'

function usePersistentScroll(id) {
  const ref = React.useRef()

  React.useLayoutEffect(() => {
    // Restore scroll position when component mounts
    const scrollPosition = window.sessionStorage.getItem(id)
    if (scrollPosition && ref.current) {
      ref.current.scrollTop = scrollPosition
    }
  }, [])

  function scrollHandler(event) {
    window.sessionStorage.setItem(id, event.target.scrollTop)
  }

  React.useEffect(() => {
    if (ref.current) {
      // Save scroll position in session storage on every scroll change
      ref.current.addEventListener('scroll', scrollHandler, {passive: true})
    }

    // Clean up
    return () => {
      ref.current.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return ref
}

function Sidebar() {
  const scrollContainerRef = usePersistentScroll('sidebar')

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
        ref={scrollContainerRef}
        // {...sidebarScrollRestoration}
      >
        <Flex flexDirection="column">
          <NavItems items={navItems} />
        </Flex>
      </BorderBox>
    </Position>
  )
}

export default Sidebar
