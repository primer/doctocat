import {Box} from '@primer/react'
import React from 'react'

function ImageContainer({children}) {
  return (
    <Box
      sx={{
        p: 6,
        bg: 'gray.1',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border.default',
        borderRadius: 2
      }}
    >
      <Box sx={{img: {maxWidth: '100%'}, justifyContent: 'center', display: 'flex'}}>{children}</Box>
    </Box>
  )
}

export default ImageContainer
