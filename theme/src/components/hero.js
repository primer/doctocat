import {graphql} from "gatsby"
import {Box, Heading, Text} from '@primer/components'
import {Container} from '@primer/gatsby-theme-doctocat'
import React from 'react'
import {useStaticQuery} from 'gatsby'

function Hero() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const {title, description} = data.site.siteMetadata

  return (
    <Box bg="black" py={6}>
      <Container>
        <Heading color="blue.4" fontSize={7} m={0}>
          {title}
        </Heading>
        <Text as="p" m={0} color="blue.2" fontSize={4}>
          {description}
        </Text>
      </Container>
    </Box>
  )
}

export default Hero
