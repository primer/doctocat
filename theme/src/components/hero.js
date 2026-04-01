import {Heading, Text, ThemeProvider} from '@primer/react'
import React from 'react'
import useSiteMetadata from '../use-site-metadata'
import Container from './container'

function Hero() {
  const {title, description} = useSiteMetadata()

  return (
    <ThemeProvider colorMode="night" nightScheme="dark_dimmed">
      <div
        style={{
          backgroundColor: 'var(--bgColor-default, var(--color-canvas-default))',
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        <Container>
          <Heading as="h1" style={{color: 'var(--fgColor-accent, var(--color-accent-fg))', fontSize: 48, margin: 0}}>
            {title}
          </Heading>
          <Text as="p" style={{margin: 0, color: 'var(--fgColor-default, var(--color-fg-default))', fontSize: 24}}>
            {description}
          </Text>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default Hero
