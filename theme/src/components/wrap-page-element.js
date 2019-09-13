import {BaseStyles} from '@primer/components'
import SkipNavLink from './skip-nav-link'
import React from 'react'

function wrapPageElement({element}) {
  return (
    <BaseStyles>
      <SkipNavLink />
      {element}
    </BaseStyles>
  )
}

export default wrapPageElement
