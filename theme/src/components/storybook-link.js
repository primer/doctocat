import {Link, Text} from '@primer/react'
import {BookIcon} from '@primer/octicons-react'
import React from 'react'

function SourceLink({href}) {
  return (
    <li>
      <Link href={href} target="_blank">
        <span style={{display: 'flex', gap: 8, alignItems: 'center'}}>
          <BookIcon />
          <Text>Storybook</Text>
        </span>
      </Link>
    </li>
  )
}

export default SourceLink
