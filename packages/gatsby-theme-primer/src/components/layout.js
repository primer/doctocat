import {MDXProvider} from '@mdx-js/react'
import {BaseStyles, Box, Flex, Link, theme} from '@primer/components'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import Blockquote from './blockquote'
import Code from './code'
import DefinitionList from './definition-list'
import Header from './header'
import {H1, H2, H3, H4, H5, H6} from './heading'
import HorizontalRule from './horizontal-rule'
import Image from './image'
import InlineCode from './inline-code'
import List from './list'
import Paragraph from './paragraph'
import Sidebar from './sidebar'
import Table from './table'

const components = {
  a: Link,
  pre: props => props.children,
  code: Code,
  inlineCode: InlineCode,
  table: Table,
  img: Image,
  p: Paragraph,
  hr: HorizontalRule,
  blockquote: Blockquote,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  ul: List,
  ol: List.withComponent('ol'),
  dl: DefinitionList,
}

function Layout({children, ...props}) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <BaseStyles>
          <Flex flexDirection="column" minHeight="100vh">
            <Header />
            <Flex flex="1 1 auto" flexDirection={['column', 'column', 'row']}>
              <Flex minWidth={240}>
                <Sidebar />
              </Flex>
              <Box width="100%" maxWidth={960} p={5} mx="auto">
                <H1>{props.pageContext.frontmatter.title}</H1>
                {children}
              </Box>
            </Flex>
          </Flex>
        </BaseStyles>
      </ThemeProvider>
    </MDXProvider>
  )
}

export default Layout
