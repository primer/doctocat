import {BorderBox, Flex} from '@primer/components'
import React from 'react'

function ImageContainer({children}) {
  return (
    <BorderBox p={6} bg="gray.1">
      <Flex justifyContent="center" sx={{img: {maxWidth: '100%'}}}>
        {children}
      </Flex>
    </BorderBox>
  )
}

export default ImageContainer
