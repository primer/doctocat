import {MDXContext} from '@mdx-js/react'
import {Box, Flex} from '@primer/components'
import React from 'react'
import Container from './container'
import PageFooter from './page-footer'
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

          <PageFooter
            editUrl={pageContext.editUrl}
            contributors={pageContext.contributors}
          />
        </Container>
      </Flex>
    </Flex>
  )
}

export default Layout
