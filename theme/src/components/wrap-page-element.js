import {BaseStyles} from '@primer/components'
import React from 'react'

function wrapPageElement({element}) {
  return <BaseStyles>{element}</BaseStyles>
}

export default wrapPageElement
