import {Flex, Heading} from '@primer/components'
import React from 'react'
import Container from './container'
import Header from './header'
import Sidebar from './sidebar'

function Layout({children, ...props}) {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Header />
      <Flex flex="1 1 auto" flexDirection={['column', 'column', 'row']}>
        <Sidebar />
        <Container>
          <Heading>{props.pageContext.frontmatter.title}</Heading>
          {children}
        </Container>
      </Flex>
    </Flex>
  )
}

export default Layout
