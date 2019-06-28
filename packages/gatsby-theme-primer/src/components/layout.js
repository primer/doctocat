import {MDXProvider} from '@mdx-js/react'
import {BaseStyles, Box, Flex, Link} from '@primer/components'
import React from 'react'
import Code from './code'
import Header from './header'
import Sidebar from './sidebar'

const components = {
  a: Link,
  pre: 'div',
  code: Code,
}

function Layout({children}) {
  return (
    <MDXProvider components={components}>
      <BaseStyles>
        <Flex flexDirection="column" minHeight="100vh">
          <Header />
          <Flex flex="1 1 auto" flexDirection={['column', 'column', 'row']}>
            <Flex minWidth={240}>
              <Sidebar />
            </Flex>
            <Box width="100%" maxWidth={960} p={5} mx="auto">
              {children}
            </Box>
          </Flex>
        </Flex>
      </BaseStyles>
    </MDXProvider>
  )
}

export default Layout
