import {CircleOcticon, Flex, Text, Grid} from '@primer/components'
import {Check, X} from '@primer/octicons-react'
import React from 'react'
import Caption from './caption'

export function DoDont({stacked, children}) {
  return (
    <Grid
      gridTemplateColumns={['1fr', null, stacked ? '1fr' : '1fr 1fr']}
      gridGap={3}
      mb={3}
    >
      {children}
    </Grid>
  )
}

DoDont.defaultProps = {
  stacked: false,
}

export function Do({src, children}) {
  return (
    <Flex flexDirection="column">
      <Flex alignSelf="start" flexDirection="row" alignItems="center" mb="2">
        <CircleOcticon
          icon={Check}
          size={16}
          bg="green.5"
          color="white"
          mr="2"
          p="1"
        />
        <Text fontWeight="bold" color="gray.9" ml="1">
          Do
        </Text>
      </Flex>
      <img src={src} width="100%" />
      <Caption mb={0}>{children}</Caption>
    </Flex>
  )
}

export function Dont({src, children}) {
  return (
    <Flex flexDirection="column">
      <Flex alignSelf="start" flexDirection="row" alignItems="center" mb="2">
        <CircleOcticon
          icon={X}
          size={16}
          bg="red.5"
          color="white"
          mr="2"
          p="1"
        />
        <Text fontWeight="bold" color="gray.9" ml="1">
          Don't
        </Text>
      </Flex>
      <img src={src} width="100%" />
      <Caption mb={0}>{children}</Caption>
    </Flex>
  )
}
