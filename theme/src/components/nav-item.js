import {themeGet} from '@primer/components'
import styled from 'styled-components'
import {space, fontWeight} from 'styled-system'

const NavItem = styled.a`
  display: block;
  padding-top: ${themeGet('space.2')}px;
  padding-bottom: ${themeGet('space.2')}px;
  padding-left: calc(${props => props.depth * 16}px + ${themeGet('space.4')}px);
  padding-right: ${themeGet('space.4')}px;
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${themeGet('colors.gray.2')};
  }

  &.active {
    color: ${themeGet('colors.blue.5')};
    background-color: ${themeGet('colors.blue.1')};
  }
  ${space};
  ${fontWeight};
`

NavItem.defaultProps = {
  depth: 0,
}

export default NavItem
