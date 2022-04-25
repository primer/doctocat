import {Link, Text} from '@primer/react'
import {MarkGithubIcon} from '@primer/octicons-react'
import React from 'react'

function SourceLink({href}) {
  return (
    <Link href={href}>
      <MarkGithubIcon />
      <Text sx={{ml: 2, display: 'inline-block'}}>View source</Text>
    </Link>
  )
}

export default SourceLink
