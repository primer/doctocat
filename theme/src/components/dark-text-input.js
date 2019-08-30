import {TextInput, themeGet} from '@primer/components'
import styled from 'styled-components'

const DarkTextInput = styled(TextInput)`
  /* The font-size of inputs should never be less than 16px.
   * Otherwise, iOS browsers will zoom in when the input is focused.
   * TODO: Update font-size of TextInput in @primer/components.
   */
  font-size: ${themeGet('fontSizes.2')}px !important;
  color: ${themeGet('colors.white')};
  background-color: rgba(255, 255, 255, 0.07);
  border: 1px solid transparent;

  &:focus {
    border: 1px solid rgba(255, 255, 255, 0.15);
    outline: none;
    box-shadow: none;
  }
`
export default DarkTextInput
