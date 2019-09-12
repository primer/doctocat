import {BaseStyles, Box} from '@primer/components'
import React from 'react'

function LivePreviewWrapper({children}) {
  return (
    <BaseStyles>
      <Box p={3}>{children}</Box>
    </BaseStyles>
  )
}

export default LivePreviewWrapper
