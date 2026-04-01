import React from 'react'
import navItems from '../nav.yml'
import {HEADER_HEIGHT} from './header'
import NavItems from './nav-items'

function usePersistentScroll(id) {
  const ref = React.useRef()

  const handleScroll = React.useCallback(
    // Save scroll position in session storage on every scroll change
    event => window.sessionStorage.setItem(id, event.target.scrollTop),
    [id],
  )

  React.useLayoutEffect(() => {
    // Restore scroll position when component mounts
    const scrollPosition = window.sessionStorage.getItem(id)
    if (scrollPosition && ref.current) {
      ref.current.scrollTop = scrollPosition
    }
  }, [id])

  // Return props to spread onto the scroll container
  return {
    ref,
    onScroll: handleScroll,
  }
}

function Sidebar() {
  const scrollContainerProps = usePersistentScroll('sidebar')

  return (
    <div
      style={{
        position: 'sticky',
        top: HEADER_HEIGHT,
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        width: 260,
      }}
    >
      <div
        {...scrollContainerProps}
        style={{
          overflow: 'auto',
          borderWidth: 0,
          borderRightWidth: '1px',
          borderRadius: 0,
          height: '100%',
          borderStyle: 'solid',
          borderColor: 'var(--borderColor-subtle, var(--color-border-subtle))',
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        <div style={{flexDirection: 'column', display: 'flex'}}>
          <NavItems items={navItems} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
