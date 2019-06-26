import React from 'react'
import Header from './header'
import {BaseStyles, Box, Flex} from '@primer/components'
import Sidebar from './sidebar'

function Layout({children}) {
  return (
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
  )
}

export default Layout
