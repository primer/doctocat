import {BaseStyles} from '@primer/react'
import Frame from './frame'
import React from 'react'

// Users can shadow this file to wrap live previews.
// This is useful for applying global styles.
function LivePreviewWrapper({children}) {
  return (
    <Frame>
      <BaseStyles>
        <div style={{padding: 16}}>{children}</div>
      </BaseStyles>
    </Frame>
  )
}

export default LivePreviewWrapper
