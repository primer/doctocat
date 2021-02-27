import {Link, StyledOcticon} from '@primer/components'
import {LinkExternalIcon} from '@primer/octicons-react'
import React from 'react'

function ExternalLink({href, children}) {
  return (
    <Link href={href} lineHeight="condensedUltra" fontSize={1}>
      <StyledOcticon icon={LinkExternalIcon} mr={1} />
      {children}
    </Link>
  )
}

export default ExternalLink
