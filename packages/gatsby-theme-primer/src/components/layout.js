import {Flex} from '@primer/components'
import React from 'react'
import Container from './container'
import Head from './head'
import Header from './header'
import {H1} from './heading'
import Sidebar from './sidebar'

function Layout({children, pageContext}) {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Head title={pageContext.frontmatter.title} />
      <Header />
      <Flex flex="1 1 auto" flexDirection={['column', 'column', 'row']}>
        <Sidebar />
        <Container>
          <H1>{pageContext.frontmatter.title}</H1>
          {children}
        </Container>
      </Flex>
    </Flex>
  )
}

export default Layout
