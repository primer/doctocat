import {Label} from '@primer/components'
import React from 'react'

const STATUS_COLORS = {
  alpha: 'orange.7',
  beta: 'yellow.8',
  stable: 'green.6',
  deprecated: 'red.6',
}

function getStatusColor(status) {
  return STATUS_COLORS[status.toLowerCase()] || 'gray.6'
}

function StatusLabel({status}) {
  return (
    <Label
      outline
      color={getStatusColor(status)}
      borderColor={getStatusColor(status)}
    >
      {status}
    </Label>
  )
}

export default StatusLabel
