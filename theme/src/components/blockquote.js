import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

const Blockquote = styled.blockquote`
  margin: 0 0 ${themeGet('space.3')};
  padding: 0 ${themeGet('space.3')};
  color: ${themeGet('colors.fg.muted')};
  border-left: 0.25em solid ${themeGet('colors.border.default')};

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
`

export default Blockquote
