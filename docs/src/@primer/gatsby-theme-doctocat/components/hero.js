import {Box, Heading, Link, Text} from '@primer/components'
import {Container} from '@primer/gatsby-theme-doctocat'
import React from 'react'
import {Link as GatsbyLink} from 'gatsby'

function Hero() {
  return (
    <Box bg="black" py={[6, 6, 6, 8]}>
      <Container>
        <Heading color="blue.4" fontSize={7} m={0}>
          Doctocat
        </Heading>
        <Text as="p" m={0} color="blue.2" fontSize={4}>
          A Gatsby theme for creating Primer documentation sites
        </Text>
        <Box mt={5} color="blue.3">
          <Link
            as={GatsbyLink}
            to="/getting-started"
            color="inherit"
            fontFamily="mono"
          >
            Get started
          </Link>
          <Text mx={2}>・</Text>
          <Link
            href="http://github.com/primer/doctocat"
            color="inherit"
            fontFamily="mono"
          >
            GitHub
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
