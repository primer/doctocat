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
    <Flex flexDirection="column" minHeight="100vh">
      <Head />
      <Header />
      <Flex flex="1 1 auto" flexDirection="row">
        <Box display={['none', null, null, 'block']}>
          <Sidebar />
        </Box>
        <Box width="100%">
          <Hero />
          <Container>
            {children}
            <PageFooter
              editUrl={pageContext.editUrl}
              contributors={pageContext.contributors.concat(
                additionalContributors.map(login => ({login})),
              )}
            />
          </Container>
        </Box>
      </Flex>
    </Flex>
  )
}

export default HeroLayout
