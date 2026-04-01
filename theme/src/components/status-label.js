import {Label} from '@primer/react'
import {DotFillIcon} from '@primer/octicons-react'
import React from 'react'

const STATUS_COLORS = {
  alpha: 'var(--fgColor-severe, var(--color-severe-fg))',
  beta: 'var(--fgColor-attention, var(--color-attention-fg))',
  stable: 'var(--fgColor-success, var(--color-success-fg))',
  deprecated: 'var(--fgColor-danger, var(--color-danger-fg))',
}

const STATUS_BACKGROUND = {
  alpha: 'var(--bgColor-severe-subtle, var(--color-severe-subtle))',
  beta: 'var(--bgColor-attention-subtle, var(--color-attention-subtle))',
  stable: 'var(--bgColor-success-subtle, var(--color-success-subtle))',
  deprecated: 'var(--bgColor-danger-subtle, var(--color-danger-subtle))',
}

function getStatusColor(status) {
  return STATUS_COLORS[status.toLowerCase()] || 'var(--fgColor-muted, var(--color-fg-muted))'
}

function getStatusBackgroundColor(status) {
  return STATUS_BACKGROUND[status.toLowerCase()] || 'var(--bgColor-neutral-subtle, var(--color-neutral-subtle))'
}

function StatusLabel({status}) {
  return (
    <Label
      size="large"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        backgroundColor: getStatusBackgroundColor(status),
        borderColor: 'transparent',
        fontWeight: 'normal',
      }}
    >
      <DotFillIcon style={{color: getStatusColor(status)}} />
      {status}
    </Label>
  )
}

export default StatusLabel
