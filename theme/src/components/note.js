import themeGet from '@styled-system/theme-get'
import styled from 'styled-components'
import {variant} from 'styled-system'

const Note = styled.div`
  padding: ${themeGet('space.3')};
  margin-bottom: ${themeGet('space.3')};
  border-radius: ${themeGet('radii.2')};
  border-left: ${themeGet('radii.2')} solid;

  & *:last-child {
    margin-bottom: 0;
  }

  ${variant({
    variants: {
      info: {
        borderColor: 'accent.muted',
        bg: 'accent.subtle'
      },
      warning: {
        borderColor: 'attention.muted',
        bg: 'attention.subtle'
      },
      danger: {
        borderColor: 'danger.muted',
        bg: 'danger.subtle'
      }
    }
  })}
`

Note.defaultProps = {
  variant: 'info'
}

export default Note
