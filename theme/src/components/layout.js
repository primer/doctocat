import {Box, Flex, Link, StyledOcticon} from '@primer/components'
import {Pencil} from '@primer/octicons-react'
import React from 'react'
import Container from './container'
import Head from './head'
import Header from './header'
import {H1} from './heading'
import Sidebar from './sidebar'
import TableOfContents from './table-of-contents'

function Layout({children, pageContext}) {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Head title={pageContext.frontmatter.title} />
      <Header />
      <Flex flex="1 1 auto" flexDirection={['column', 'column', 'row']}>
        <Sidebar />
        <Container>
          <H1>{pageContext.frontmatter.title}</H1>
          {pageContext.tableOfContents.items ? (
            <TableOfContents items={pageContext.tableOfContents.items} />
          ) : null}
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
