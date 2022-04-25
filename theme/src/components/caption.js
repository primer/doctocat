import {Text} from '@primer/react'
import React from 'react'

function Caption(props) {
  return <Text as="p" {...props} sx={{mt: 2, mb: 3, fontSize: 1, color: 'gray.5'}} />
}

export default Caption
