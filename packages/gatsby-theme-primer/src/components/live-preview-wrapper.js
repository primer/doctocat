import {BaseStyles, Box} from '@primer/components'
import React from 'react'

// TODO: explain the purpose of this component
function LivePreviewWrapper({children}) {
  return (
    <BaseStyles>
      <Box p={3}>{children}</Box>
    </BaseStyles>
  )
}

export default LivePreviewWrapper
