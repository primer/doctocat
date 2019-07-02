import {MDXProvider} from '@mdx-js/react'
import {BaseStyles, Box, Flex, Heading, Link, theme} from '@primer/components'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import Code from './code'
import Header from './header'
import Sidebar from './sidebar'
import Table from './table'

const components = {
  a: Link,
  pre: props => props.children,
  code: Code,
  table: Table,
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
                <Heading>{props.pageContext.frontmatter.title}</Heading>
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
