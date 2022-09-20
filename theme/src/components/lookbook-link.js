import {Link, Text, Box} from '@primer/react'
import {BookIcon} from '@primer/octicons-react'
import React from 'react'

function SourceLink({href}) {
  return (
    <Link href={href} target="_blank">
      <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
        <BookIcon />
        <Text>Lookbook</Text>
      </Box>
    </Link>
  )
}

export default SourceLink
