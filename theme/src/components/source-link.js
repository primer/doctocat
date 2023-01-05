import {Link, Text, Box} from '@primer/react'
import {MarkGithubIcon} from '@primer/octicons-react'
import React from 'react'

function SourceLink({href}) {
  return (
    <li>
      <Link href={href} target="_blank">
        <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
          <MarkGithubIcon />
          <Text>Source</Text>
        </Box>
      </Link>
    </li>
  )
}

export default SourceLink
