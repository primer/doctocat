import {Box, Flex} from '@primer/components'
import React from 'react'
import Container from './container'
import PageFooter from './page-footer'
import Head from './head'
import Header from './header'
import Hero from './hero'
import Sidebar from './sidebar'

function HeroLayout({children, pageContext}) {
  let {additionalContributors} = pageContext.frontmatter

  if (!additionalContributors) {
    additionalContributors = []
  }

  return (
    <Box display="flex" sx={{flexDirection: 'column', minHeight: '100vh'}}>
      <Head />
      <Header />
      <Box display="flex" sx={{flex: '1 1 auto', flexDirection: 'row'}}>
        <Box display={['none', null, null, 'block']}>
          <Sidebar />
        </Box>
        <Box width="100%">
          <Hero />
          <Container>
            {children}
            <PageFooter
              editUrl={pageContext.editUrl}
              contributors={pageContext.contributors.concat(additionalContributors.map(login => ({login})))}
            />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default HeroLayout
