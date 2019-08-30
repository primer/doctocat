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
  const {
    title,
    description,
    status,
    additionalContributors = [],
  } = pageContext.frontmatter

  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Head title={title} description={description} />
      <Header />
      <Flex flex="1 1 auto" flexDirection="row">
        <Box display={['none', null, null, 'block']}>
          <Sidebar />
        </Box>
        <Container>
          <H1>{title}</H1>

          {status ? (
            <Box mb={4}>
              <StatusLabel status={status} />
            </Box>
          ) : null}

          {pageContext.tableOfContents.items ? (
            <TableOfContents items={pageContext.tableOfContents.items} />
          ) : null}

          {children}

          <PageFooter
            editUrl={pageContext.editUrl}
            contributors={pageContext.contributors.concat(
              additionalContributors.map(login => ({login})),
            )}
          />
        </Container>
      </Flex>
    </Flex>
  )
}

export default Layout
