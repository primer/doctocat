// import componentMetadata from '@primer/component-metadata'
import {Box, Heading, Text} from '@primer/react'
import React from 'react'
import Head from './head'
import Header, {HEADER_HEIGHT} from './header'
import PageFooter from './page-footer'
import Sidebar from './sidebar'
import TableOfContents from './table-of-contents'
import DraftTableOfContents from './draft-table-of-contents'

function DraftyLayout({children, pageContext, location}) {
  let {title, description, additionalContributors} = pageContext.frontmatter

  if (!additionalContributors) {
    additionalContributors = []
  }

  console.log('location', location.hash)
  console.log('location', location.pathname)
  console.log('items', pageContext.tableOfContents.items[0].items)
  console.log('items1000', pageContext.tableOfContents.items)
  const subItems = pageContext.tableOfContents.items.find(x => x.url === location.hash).items
  console.log('subItems', subItems)

  return (
    <Box sx={{flexDirection: 'column', minHeight: '100vh', display: 'flex'}}>
      <Head title={title} description={description} />
      <Header />
      <Box css={{zIndex: 0}} sx={{flex: '1 1 auto', flexDirection: 'row', display: 'flex'}}>
        <Box sx={{display: ['none', null, null, 'block']}}>
          <Sidebar />
        </Box>
        <Box
          id="skip-nav"
          sx={{
            justifyContent: 'center',
            flexDirection: 'row-reverse',
            display: 'flex',
            width: '100%',
            p: [4, 5, 6, 7]
          }}
        >
          {subItems ? (
            <Box
              sx={{
                width: 220,
                flex: '0 0 auto',
                marginLeft: 6,
                display: ['none', null, 'block'],
                position: 'sticky',
                top: HEADER_HEIGHT + 48,
                maxHeight: `calc(100vh - ${HEADER_HEIGHT}px - 48px)`
              }}
              css={{gridArea: 'table-of-contents', overflow: 'auto'}}
            >
              <Text sx={{display: 'inline-block', fontWeight: 'bold', pl: 3}} id="toc-heading">
                On this page
              </Text>
              <DraftTableOfContents aria-labelledby="toc-heading" items={subItems} />
            </Box>
          ) : null}
          <Box sx={{width: '100%', maxWidth: '960px'}}>
            <Heading as="h1">{title}</Heading>{' '}
            {pageContext.tableOfContents.items ? (
              <Box
                sx={{
                  display: ['block', null, 'none'],
                  mb: 5,
                  borderColor: 'border.muted',
                  bg: 'canvas.subtle',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderRadius: 2
                }}
              >
                <Box sx={{px: 3, py: 2}}>
                  <Box
                    sx={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}
                  >
                    <Text sx={{fontWeight: 'bold'}}>On this page</Text>
                  </Box>
                </Box>
                <Box sx={{borderTop: '1px solid', borderColor: 'border.muted'}}>
                  <TableOfContents items={pageContext.tableOfContents.items} />
                </Box>
              </Box>
            ) : null}
            {children}
            <PageFooter
              editUrl={pageContext.editUrl}
              contributors={pageContext.contributors.concat(additionalContributors.map(login => ({login})))}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DraftyLayout
