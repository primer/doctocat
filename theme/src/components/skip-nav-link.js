import {Link} from '@primer/components'
import React from 'react'
import styled from 'styled-components'

function SkipNavLinkBase(props) {
  return (
    <Link {...props} href="#skip-nav" bg="white" zIndex={100} p={2}>
      Skip to main content
    </Link>
  )
}

const SkipNavLink = styled(SkipNavLinkBase)`
  top: 1em;
  left: 1em;
  overflow: hidden;
  position: absolute;
  z-index: 100;

  &:not(:focus) {
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
  }
`

export default SkipNavLink
