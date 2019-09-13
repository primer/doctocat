import {Box} from '@primer/components'
import React from 'react'

function Main({children, ...rest}) {
  return (
    <Box width="100%" {...rest} as="main" id="skip-nav">
      {children}
    </Box>
  )
}

export default Main
