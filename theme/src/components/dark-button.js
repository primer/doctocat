import {ButtonOutline, themeGet} from '@primer/components'
import styled from 'styled-components'

const DarkButton = styled(ButtonOutline)`
  color: ${themeGet('colors.blue.2')};
  background-color: transparent;
  border: 1px solid ${themeGet('colors.gray.7')};
  box-shadow: none;
`

export default DarkButton
