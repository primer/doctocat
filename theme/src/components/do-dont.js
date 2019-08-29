import React from 'react'
import {Flex, CircleOcticon, Text, Box} from '@primer/components'
import Caption from './caption'
import {X, Check} from '@primer/octicons-react'

export const Do = ({src, children}) => {
  return (
    <Flex flexDirection='column' mr="2">
      <Flex alignSelf='start' flexDirection="row" alignItems="center" mb="2">
        <CircleOcticon icon={Check} size={16} bg="green.5" color="white" mr="2" p="1"/>
        <Text fontWeight="bold" color="gray.9" ml="1">
          Do
        </Text>
      </Flex>
      <Box as='img' src={src} width="100%" height="auto"/>
      <Caption {...children}/>
    </Flex>
  )
}

export const Dont = ({src, children}) => {
  return (
    <Flex flexDirection='column' mr="2">
      <Flex alignSelf='start' flexDirection="row" alignItems="center" mb="2">
        <CircleOcticon icon={X} size={16} bg="red.5" color="white" mr="2" p="1"/>
        <Text fontWeight="bold" color="gray.9" ml="1">
          Don't
        </Text>
      </Flex>
      <Box as='img' src={src} width="100%" height="auto"/>
      <Caption {...children}/>
    </Flex>
  )
}
