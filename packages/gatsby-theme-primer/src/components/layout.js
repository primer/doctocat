import React from 'react'
import Header from './header'
import {BaseStyles, Box, Flex} from '@primer/components'
import Sidebar from './sidebar'

export default ({children}) => (
  <BaseStyles>
    <Header />
    <Flex flexDirection={['column', 'column', 'row']}>
      <Flex.Item flex="0 0 auto" width={['100%', '100%', 300]}>
        <Sidebar />
      </Flex.Item>
      <Box width="100%" maxWidth={960} p={5} mx="auto">
        {children}
      </Box>
    </Flex>
  </BaseStyles>
)
