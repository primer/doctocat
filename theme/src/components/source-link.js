import {Link} from '@primer/components'
import {CodeIcon} from '@primer/styled-octicons'
import React from 'react'

function SourceLink({href}) {
  return (
    <Link href={href} lineHeight="condensedUltra" fontSize={1}>
      <CodeIcon mr={2} />
      View source
    </Link>
  )
}

export default SourceLink
