import {graphql, useStaticQuery} from 'gatsby'
import {Box, Flex, Link, StyledOcticon} from '@primer/components'
import {Pencil} from '@primer/octicons-react'
import React from 'react'
import Container from '../components/container'
import Head from '../components/head'
import Header from '../components/header'
import {H1} from '../components/heading'
import Sidebar from '../components/sidebar'

function Layout({children, pageContext, data}) {
  console.log(data)
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Head title={data.mdx.frontmatter.title} />
      <Header />
      <Flex flex="1 1 auto" flexDirection={['column', 'column', 'row']}>
        <Sidebar />
        <Container>
          <H1>{data.mdx.frontmatter.title}</H1>
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
      </Flex>
    </Flex>
  )
}

export default Layout

export const pageQuery = graphql`
  query($title: String) {
    mdx(frontmatter: {title: {eq: $title}}) {
      id
      tableOfContents
      frontmatter {
        title
      }
    }
  }
`
