import {Box, Heading, Text} from '@primer/components'
import {Container} from 'gatsby-theme-primer'
import React from 'react'
import {version} from '../../package.json'

function Hero() {
  return (
    <Box bg="black" py={4}>
      <Container>
        <Heading color="blue.4" fontSize={7} m={0}>
          Primer CSS
        </Heading>
        <Text as="div" color="blue.2" fontSize={2}>
          v{version}
        </Text>
      </Container>
    </Box>
  )
}

export default Hero
