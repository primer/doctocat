import {BorderBox, Flex} from '@primer/components'
import React from 'react'

function ImageContainer({children}) {
  return (
    <BorderBox sx={{p: 6, bg: 'gray.1'}}>
      <Flex sx={{img: {maxWidth: '100%'}, justifyContent: 'center'}}>{children}</Flex>
    </BorderBox>
  )
}

export default ImageContainer
