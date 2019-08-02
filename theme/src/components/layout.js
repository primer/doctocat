import {Box, Flex, Link, StyledOcticon} from '@primer/components'
import {Pencil} from '@primer/octicons-react'
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
      <Flex flex="1 1 auto" flexDirection="row">
        <Box display={['none', null, null, 'block']}>
          <Sidebar />
        </Box>
        <Container>
          <H1>{pageContext.frontmatter.title}</H1>
          {children}
          {pageContext.editUrl ? (
            <Box my={6}>
              <Link href={pageContext.editUrl}>
                <StyledOcticon icon={Pencil} mr={2} />
                Edit this page on GitHub
              </Link>
            </Box>
          ) : null}
        </Container>
      </Flex>
    </Flex>
  )
}

export default Layout
