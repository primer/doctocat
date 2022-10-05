import {BaseStyles, themeGet} from '@primer/react'
import React from 'react'
import {createGlobalStyle} from 'styled-components'
import SkipLink from './skip-link'

const GlobalStyles = createGlobalStyle`
  body {
    color: ${themeGet('colors.fg.default')};
    background-color: ${themeGet('colors.canvas.default')};
  }

  .footnotes {
    font-size: ${themeGet('fontSizes.1')};
    color: ${themeGet('colors.fg.subtle')};

    ol {
      padding-left: ${themeGet('space.3')};
    }

  .footnote-backref {
      font-family: ${themeGet('fonts.mono')};
      margin-left: 2px;
      text-decoration: none;
    }
  }
`

function wrapPageElement({element}) {
  return (
    <BaseStyles>
      <GlobalStyles />
      <SkipLink />
      {element}
    </BaseStyles>
  )
}

export default wrapPageElement
