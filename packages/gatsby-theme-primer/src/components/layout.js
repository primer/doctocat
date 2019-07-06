import {MDXProvider} from '@mdx-js/react'
import {
  BaseStyles,
  Box,
  Flex,
  Heading,
  Link,
  StyledOcticon,
  theme,
} from '@primer/components'
import {Pencil} from '@primer/octicons-react'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import Code from './code'
import Header from './header'
import Sidebar from './sidebar'

const components = {
  a: Link,
  pre: props => props.children,
  code: Code,
}

function Layout({children, pageContext}) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <BaseStyles>
          <Flex flexDirection="column" minHeight="100vh">
            <Header />
            <Flex flex="1 1 auto" flexDirection={['column', 'column', 'row']}>
              <Flex minWidth={240}>
                <Sidebar />
              </Flex>
              <Box width="100%" maxWidth={960} p={5} mx="auto">
                <Heading>{pageContext.frontmatter.title}</Heading>
                {children}
                <Box my={6}>
                  <Link href={pageContext.editUrl}>
                    <StyledOcticon icon={Pencil} mr={2} />
                    Edit this page on GitHub
                  </Link>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </BaseStyles>
      </ThemeProvider>
    </MDXProvider>
  )
}

export default Layout
