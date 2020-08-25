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
        borderColor: 'blue.4',
        bg: 'blue.0',
      },
      warning: {
        borderColor: 'yellow.5',
        bg: 'yellow.1',
      },
      danger: {
        borderColor: 'red.4',
        bg: 'red.0',
      },
    },
  })}
`

Note.defaultProps = {
  variant: 'info',
}

export default Note
