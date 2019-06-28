import {Button, StyledOcticon} from '@primer/components'
import {Check, Clippy} from '@primer/octicons-react'
import copy from 'copy-to-clipboard'
import React from 'react'

function ClipboardCopy({value}) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <Button
      onClick={() => {
        copy(value)
        setCopied(true)
      }}
    >
      <StyledOcticon
        icon={copied ? Check : Clippy}
        color={copied ? 'green.5' : 'gray.7'}
      />
    </Button>
  )
}

export default ClipboardCopy
