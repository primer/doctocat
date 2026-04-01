import {Label} from '@primer/react'
import {AccessibilityInsetIcon} from '@primer/octicons-react'
import React from 'react'

function AccessibilityLabel({a11yReviewed, short}) {
  return (
    <>
      {a11yReviewed ? (
        <Label
          size="large"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'var(--bgColor-done-subtle, var(--color-done-subtle))',
            fontWeight: 'normal',
            borderColor: 'transparent',
          }}
        >
          <AccessibilityInsetIcon style={{fill: 'var(--fgColor-done, var(--color-done-fg))'}} />
          {short ? 'Reviewed' : 'Reviewed for accessibility'}
        </Label>
      ) : (
        <Label
          size="large"
          style={{
            backgroundColor: 'var(--bgColor-neutral-subtle, var(--color-neutral-subtle))',
            fontWeight: 'normal',
            borderColor: 'transparent',
          }}
        >
          {short ? 'Not reviewed' : 'Not reviewed for accessibility'}
        </Label>
      )}
    </>
  )
}

export default AccessibilityLabel
