import {BaseStyles, themeGet} from '@primer/react'
import React from 'react'
import {createGlobalStyle} from 'styled-components'
import SkipLink from './skip-link'

const GlobalStyles = createGlobalStyle`
  body {
    color: ${themeGet('colors.fg.default')};
    background-color: ${themeGet('colors.canvas.default')};
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
