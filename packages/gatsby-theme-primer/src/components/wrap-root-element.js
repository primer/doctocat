import {MDXProvider} from '@mdx-js/react'
import {Link, theme} from '@primer/components'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import Code from './code'

const components = {
  a: Link,
  pre: props => props.children,
  code: Code,
}

function wrapRootElement({element}) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </MDXProvider>
  )
}

export default wrapRootElement
