import {Label, StyledOcticon} from '@primer/react'
import {DotFillIcon} from '@primer/octicons-react'
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

function StatusLabel({status}) {
  return (
    <Label
      size="large"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        backgroundColor: getStatusBackgroundColor(status),
        borderColor: 'transparent',
        fontWeight: 'normal'
      }}
    >
      <StyledOcticon icon={DotFillIcon} sx={{color: getStatusColor(status)}} />
      {status}
    </Label>
  )
}

export default StatusLabel
