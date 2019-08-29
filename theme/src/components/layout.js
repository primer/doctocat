import {MDXContext} from '@mdx-js/react'
import {BorderBox, Box, Flex, Link, StyledOcticon} from '@primer/components'
import {Pencil} from '@primer/octicons-react'
import React from 'react'
import Container from './container'
import Contribitors from './contributors'
import Head from './head'
import Header from './header'
import Sidebar from './sidebar'
import StatusLabel from './status-label'
import TableOfContents from './table-of-contents'

function Layout({children, pageContext}) {
  const {h1: H1 = 'h1'} = React.useContext(MDXContext)

  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Head
        title={pageContext.frontmatter.title}
        description={pageContext.frontmatter.description}
      />
      <Header />
      <Flex flex="1 1 auto" flexDirection="row">
        <Box display={['none', null, null, 'block']}>
          <Sidebar />
        </Box>
        <Container>
          <H1>{pageContext.frontmatter.title}</H1>

          {pageContext.frontmatter.status ? (
            <Box mb={4}>
              <StatusLabel status={pageContext.frontmatter.status} />
            </Box>
          ) : null}

          {pageContext.tableOfContents.items ? (
            <TableOfContents items={pageContext.tableOfContents.items} />
          ) : null}

          {children}

          <BorderBox border={0} borderRadius={0} borderTop={1} mt={8} py={4}>
            <Link href={pageContext.editUrl} mb={4}>
              <StyledOcticon icon={Pencil} mr={2} />
              Edit this page on GitHub
            </Link>
            <Contribitors contributors={pageContext.contributors} />
          </BorderBox>
        </Container>
      </Flex>
    </Flex>
  )
}

export default Layout
