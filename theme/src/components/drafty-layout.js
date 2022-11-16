import componentMetadata from '@primer/component-metadata'
import {Box, Heading, Text} from '@primer/react'
import React from 'react'
import Head from './head'
import Header, {HEADER_HEIGHT} from './header'
import PageFooter from './page-footer'
import Sidebar from './sidebar'
import UnderlineNavigation from './underline-navigation'
import DraftTableOfContents from './draft-table-of-contents'

function DraftyLayout({children, pageContext, location}) {
  let {title, description, additionalContributors, componentId} = pageContext.frontmatter

  if (!additionalContributors) {
    additionalContributors = []
  }

  const navigationItems = pageContext.tableOfContents.items

  const component = componentMetadata.components[componentId]

  // Auto-populate title and description using component metadata
  if (component) {
    title ||= component.displayName
    description ||= component.description
  }

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
          {navigationItems ? (
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
              <DraftTableOfContents aria-labelledby="toc-heading" items={navigationItems} />
            </Box>
          ) : null}
          <Box sx={{width: '100%', maxWidth: '960px'}}>
            <Box sx={{alignItems: 'center', display: 'flex'}}>
              <Heading as="h1">{title}</Heading>
            </Box>
            {description ? <Box sx={{fontSize: 3, mb: 3}}>{description}</Box> : null}
            {navigationItems ? <UnderlineNavigation items={navigationItems} /> : null}
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
