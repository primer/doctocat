import {Box} from '@primer/react'
import React from 'react'

function ImageContainer({children}) {
  return (
    <Box borderWidth="1px" borderStyle="solid" borderColor="border.default" borderRadius={2} sx={{p: 6, bg: 'gray.1'}}>
      <Box display="flex" sx={{img: {maxWidth: '100%'}, justifyContent: 'center'}}>
        {children}
      </Box>
    </Box>
  )
}

export default ImageContainer
