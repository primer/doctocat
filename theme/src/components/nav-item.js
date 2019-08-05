import {themeGet} from '@primer/components'
import styled from 'styled-components'
import {space, fontWeight, fontSize} from 'styled-system'

const NavItem = styled.a`
  display: block;
  padding: ${themeGet('space.4')}px;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  font-weight: ${themeGet('fontWeights.bold')};

  &:hover {
    background-color: ${themeGet('colors.gray.1')};
  }

  &.active {
    color: ${themeGet('colors.blue.5')};
    box-shadow: inset 3px 0 ${themeGet('colors.blue.5')};
  }

  ${space};
  ${fontWeight};
  ${fontSize};
`

NavItem.defaultProps = {
  depth: 0,
}

export default NavItem
