import {BorderBox, StyledOcticon, Flex, Text} from '@primer/components'
import {DotFillIcon} from '@primer/octicons-react'
import React from 'react'

const STATUS_COLORS = {
  alpha: 'red.6',
  beta: 'yellow.7',
  stable: 'green.6',
  deprecated: 'red.6',
}

function getStatusColor(status) {
  return STATUS_COLORS[status.toLowerCase()] || 'gray.5'
}

function StatusLabel({status}) {
  return (
    <BorderBox display="inline-block" px={2} py={1}>
      <Flex alignItems="center">
        <StyledOcticon icon={DotFillIcon} color={getStatusColor(status)} mr={2} />
        <Text fontSize={1}>{status}</Text>
      </Flex>
    </BorderBox>
  )
}

export default StatusLabel
