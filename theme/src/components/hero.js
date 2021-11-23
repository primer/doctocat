import {Box, Heading, Text, ThemeProvider} from '@primer/components'
import React from 'react'
import useSiteMetadata from '../use-site-metadata'
import Container from './container'

function Hero() {
  const {title, description} = useSiteMetadata()

  return (
    <ThemeProvider colorMode="night" nightScheme="dark_dimmed">
      <Box bg="canvas.default" py={6}>
        <Container>
          <Heading as="h1" sx={{color: 'accent.fg', fontSize: 7, m: 0}}>
            {title}
          </Heading>
          <Text as="p" m={0} color="fg.default" fontSize={4}>
            {description}
          </Text>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default Hero
