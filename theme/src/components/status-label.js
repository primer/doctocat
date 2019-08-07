import {BorderBox, Flex, StyledOcticon, Text} from '@primer/components'
import {PrimitiveDot} from '@primer/octicons-react'
import React from 'react'

const STATUS_COLORS = {
  stable: 'green.6',
  new: 'green.6',
  experimental: 'yellow.7',
  review: 'yellow.7',
  deprecated: 'red.6',
}

function getStatusColor(status) {
  return STATUS_COLORS[status.toLowerCase()] || 'gray.5'
}

function StatusLabel({status}) {
  return (
    <BorderBox display="inline-block" px={2} py={1}>
      <Flex alignItems="center">
        <StyledOcticon
          icon={PrimitiveDot}
          color={getStatusColor(status)}
          mr={2}
        />
        <Text fontSize={1}>{status}</Text>
      </Flex>
    </BorderBox>
  )
}

export default StatusLabel
