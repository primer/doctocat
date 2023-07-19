import {Label, StyledOcticon} from '@primer/react'
import {AccessibilityInsetIcon} from '@primer/octicons-react'
import React from 'react'

function AccessibilityLabel({a11yReviewed, short}) {
  return (
    <>
      {a11yReviewed ? (
        <Label
          size="large"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            backgroundColor: 'done.subtle',
            fontWeight: 'normal',
            borderColor: 'transparent'
          }}
        >
          <StyledOcticon icon={AccessibilityInsetIcon} sx={{fill: 'done.fg'}} />
          {short ? 'Reviewed' : 'Reviewed for accessibility'}
        </Label>
      ) : (
        <Label
          size="large"
          sx={{
            backgroundColor: 'neutral.subtle',
            fontWeight: 'normal',
            borderColor: 'transparent'
          }}
        >
          {short ? 'Not reviewed' : 'Not reviewed for accessibility'}
        </Label>
      )}
    </>
  )
}

export default AccessibilityLabel
