import {Link, Tooltip} from '@primer/components'
import Octicon, {FileCode} from '@primer/octicons-react'
import React from 'react'

function SourceLink({href}) {
  return (
    <Tooltip aria-label="View source" direction="nw">
      <Link
        href={href}
        aria-label="View source"
        p={2}
        lineHeight="condensedUltra"
      >
        <Octicon icon={FileCode} />
      </Link>
    </Tooltip>
  )
}

export default SourceLink
