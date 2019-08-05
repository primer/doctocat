import {themeGet} from '@primer/components'
import styled from 'styled-components'
import {space, fontWeight, fontSize} from 'styled-system'

const NavSubitem = styled.a`
  display: block;
  font-size: ${themeGet('fontSizes.1')}px;
  padding: ${themeGet('space.2')}px ${themeGet('space.4')}px;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  color: ${themeGet('colors.blue.5')};

  &:hover {
    color: ${themeGet('colors.gray.8')};
    background-color: ${themeGet('colors.gray.2')};
  }

  &.active {
    color: ${themeGet('colors.gray.8')};
    font-weight: ${themeGet('fontWeights.bold')};
  }

  ${space};
  ${fontWeight};
  ${fontSize};
`

export default NavSubitem
