import {Link, StyledOcticon} from '@primer/components'
import {FileCode} from '@primer/octicons-react'
import React from 'react'

function SourceLink({href}) {
  return (
    <Link href={href} lineHeight="condensedUltra" fontSize={1}>
      <StyledOcticon icon={FileCode} mr={2} />
      View source
    </Link>
  )
}

export default SourceLink
