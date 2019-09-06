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

export function Do(props) {
  return <DoDontBase {...props} text="Do" icon={Check} iconBg="green.5" />
}

export function Dont(props) {
  return <DoDontBase {...props} text="Don't" icon={X} iconBg="red.5" />
}

function DoDontBase({src, alt, children, text, icon, iconBg}) {
  return (
    <Flex flexDirection="column">
      <Flex alignSelf="start" flexDirection="row" alignItems="center" mb="2">
        <CircleOcticon
          icon={icon}
          size={16}
          bg={iconBg}
          color="white"
          mr="2"
          p="1"
        />
        <Text fontWeight="bold" color="gray.9" ml="1">
          {text}
        </Text>
      </Flex>
      <img src={src} alt={alt} width="100%" />
      <Caption mb={0}>{children}</Caption>
    </Flex>
  )
}

DoDontBase.defaultProps = {
  alt: '',
}
