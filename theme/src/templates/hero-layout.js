import {graphql} from "gatsby"
import {Box, Flex, Link, StyledOcticon} from '@primer/components'
import {Pencil} from '@primer/octicons-react'
import React from 'react'
import Container from '../components/container'
import Head from '../components/head'
import Header from '../components/header'
import Hero from '../components/hero'
import Sidebar from '../components/sidebar'

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

export const pageQuery = graphql`
  query {
    mdx(frontmatter: {title: {eq: "Doctocat"}}) {
      id
      tableOfContents
    }
  }
`
