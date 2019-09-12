import {BaseStyles, Box} from '@primer/components'
import React from 'react'
import {Frame} from '@primer/gatsby-theme-doctocat'

function LivePreviewWrapper({children}) {
  return (
    <Frame>
      <BaseStyles>
        <Box p={3}>{children}</Box>
      </BaseStyles>
    </Frame>
  )
}

export default LivePreviewWrapper
