import {BaseStyles} from '@primer/components'
import React from 'react'
import RepositoryProvider from './repository-provider'

function wrapPageElement({element}) {
  return (
    <RepositoryProvider>
      <BaseStyles>{element}</BaseStyles>
    </RepositoryProvider>
  )
}

export default wrapPageElement
