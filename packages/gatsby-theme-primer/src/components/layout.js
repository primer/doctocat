import {BaseStyles, Box, Flex} from '@primer/components'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import {Styled, useThemeUI} from 'theme-ui'
import Header from './header'
import Sidebar from './sidebar'

function Layout({children, ...props}) {
  const {theme} = useThemeUI()
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        <Flex flexDirection="column" minHeight="100vh">
          <Header />
          <Flex flex="1 1 auto" flexDirection={['column', 'column', 'row']}>
            <Flex minWidth={240}>
              <Sidebar />
            </Flex>
            <Box width="100%" maxWidth={960} p={5} mx="auto">
              <Styled.h1>{props.pageContext.frontmatter.title}</Styled.h1>
              {children}
            </Box>
          </Flex>
        </Flex>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default Layout
