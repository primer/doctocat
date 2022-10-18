import {Label, Box} from '@primer/react'
import React from 'react'

const STATUS_COLORS = {
  alpha: 'severe.fg',
  beta: 'attention.fg',
  stable: 'success.fg',
  deprecated: 'danger.fg'
}

const STATUS_BACKGROUND = {
  alpha: 'severe.subtle',
  beta: 'attention.subtle',
  stable: 'success.subtle',
  deprecated: 'danger.subtle'
}

function getStatusColor(status) {
  return STATUS_COLORS[status.toLowerCase()] || 'fg.muted'
}

function getStatusBackgroundColor(status) {
  return STATUS_BACKGROUND[status.toLowerCase()] || 'neutral.subtle'
}

function StatusLabel({status, size}) {
  const circleSize = size === 'large' ? 8 : 6

  return (
    <Label
      as={'li'}
      size={size || 'small'}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        backgroundColor: getStatusBackgroundColor(status),
        borderColor: 'transparent',
        fontWeight: 'normal'
      }}
    >
      <Box
        aria-hidden="true"
        sx={{height: circleSize, width: circleSize, backgroundColor: getStatusColor(status), borderRadius: 99}}
      />
      {status}
    </Label>
  )
}

export default StatusLabel
