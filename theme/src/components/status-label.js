import {Label} from '@primer/components'
import React from 'react'

const STATUS_COLORS = {
  alpha: 'severe.fg',
  beta: 'attention.fg',
  stable: 'success.fg',
  deprecated: 'danger.fg',
}

function getStatusColor(status) {
  return STATUS_COLORS[status.toLowerCase()] || 'fg.muted'
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
