import {Label, Box} from '@primer/react'
import React from 'react'

const STATUS_COLORS = {
  alpha: 'severe.fg',
  beta: 'attention.fg',
  stable: 'success.fg',
  deprecated: 'danger.fg'
}

function getStatusColor(status) {
  return STATUS_COLORS[status.toLowerCase()] || 'fg.muted'
}

function StatusLabel({status}) {
  return (
    <Label size="large" variant="secondary">
      <Box sx={{height: 8, width: 8, backgroundColor: getStatusColor(status), borderRadius: 9, mr: 1}} />
      {status}
    </Label>
  )
}

export default StatusLabel
