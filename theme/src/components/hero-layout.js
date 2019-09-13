import {Box, Flex} from '@primer/components'
import React from 'react'
import Container from './container'
import Main from './main'
import PageFooter from './page-footer'
import Head from './head'
import Header from './header'
import Hero from './hero'
import Sidebar from './sidebar'

function HeroLayout({children, pageContext}) {
  const {additionalContributors = []} = pageContext.frontmatter

  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Head />
      <Header />
      <Flex flex="1 1 auto" flexDirection="row">
        <Box display={['none', null, null, 'block']}>
          <Sidebar />
        </Box>
        <Main>
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
        </Main>
      </Flex>
    </Flex>
  )
}

export default HeroLayout
