import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

const DefinitionList = styled.dl`
  padding: 0;

  dt {
    padding: 0;
    margin-top: ${themeGet('space.3')}px;
    font-size: 1em;
    font-style: italic;
    font-weight: ${themeGet('fontWeights.bold')};
  }

  dd {
    padding: 0 ${themeGet('space.3')}px;
    margin: 0 0 ${themeGet('space.3')}px;
  }
`

export default DefinitionList
