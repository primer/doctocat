import {Flex, Position} from '@primer/components'
import {themeGet} from '@styled-system/theme-get'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import data from '../nav.yml'

const NavLink = styled.a`
  padding: ${themeGet('space.1')}px 0;
  color: ${themeGet('colors.gray.7')};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: ${themeGet('colors.blue.5')};
  }
`

function NavItems({items, ...props}) {
  return items.map(item => (
    <Flex flexDirection="column" key={item.url} {...props}>
      <NavLink as={GatsbyLink} to={item.url} activeClassName="active">
        {item.title}
      </NavLink>
      {item.items ? <NavItems items={item.items} pl={3} /> : null}
    </Flex>
  ))
}

function Sidebar() {
  const rootElement = React.useRef(null)
  const {top = 0} = useBoundingClientRect(rootElement)

  return (
    <Position
      ref={rootElement}
      position={['static', 'static', 'sticky']}
      top={top}
      height={['auto', 'auto', `calc(100vh - ${top}px)`]}
      minWidth={240}
      p={4}
      bg="gray.1"
      style={{overflow: 'auto'}}
    >
      <NavItems items={data} />
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
