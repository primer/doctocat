import {Box, Flex, Link, StyledOcticon} from '@primer/components'
import {Pencil} from '@primer/octicons-react'
import React from 'react'
import Container from './container'
import Head from './head'
import Header from './header'
import Hero from './hero'
import Sidebar from './sidebar'

function HeroLayout({children, pageContext}) {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Head title={pageContext.frontmatter.title} />
      <Header />
      <Flex flex="1 1 auto" flexDirection={['column', 'column', 'row']}>
        <Sidebar />
        <Box width="100%">
          <Hero />
          <Container>
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
        </Box>
      </Flex>
    </Flex>
  )
}

export default HeroLayout
