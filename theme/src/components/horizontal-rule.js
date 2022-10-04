import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

const HorizontalRule = styled.hr`
  height: 1px;
  padding: 0;
  margin: ${themeGet('space.4')} 0;
  background-color: ${themeGet('colors.border.default')};
  border: 0;
`

export default HorizontalRule
