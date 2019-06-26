import React from 'react'
import Header from './header'
import {BaseStyles, Box, Flex} from '@primer/components'
import Sidebar from './sidebar'

function Layout({children}) {
  return (
    <BaseStyles>
      <Header />
      <Flex>
        <Sidebar />
        <Box width="100%" maxWidth={960} p={5} mx="auto">
          {children}
        </Box>
      </Flex>
    </BaseStyles>
  )
}

export default Layout
