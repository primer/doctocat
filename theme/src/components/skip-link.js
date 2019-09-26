import {Link} from '@primer/components'
import styled from 'styled-components'
import React from 'react'

function SkipLinkBase({...rest}) {
  return (
    <Link
      {...rest}
      backgroundColor="blue.6"
      color="white"
      p={3}
      href="#skip-nav"
      fontSize={14}
    >
      Skip to content
    </Link>
  )
}

const SkipLink = styled(SkipLinkBase)`
  z-index: 20;
  width: auto;
  height: auto;
  clip: auto;
  position: absolute;
  overflow: hidden;

  &:not(:focus) {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
  }
`

export default SkipLink
