import {BaseStyles, Box, Flex, Heading} from '@primer/components'
import React from 'react'
import Header from './header'
import Sidebar from './sidebar'

function Layout({children, ...props}) {
  return (
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
  )
}

export default Layout
