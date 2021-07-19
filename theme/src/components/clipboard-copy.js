import {Button, StyledOcticon} from '@primer/components'
import {CheckIcon, ClippyIcon} from '@primer/octicons-react'
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
      sx={{px: 2}}
      aria-label="Copy to clipboard"
      onClick={() => {
        copy(value)
        setCopied(true)
      }}
    >
      {copied ? (
        <StyledOcticon icon={CheckIcon} sx={{color: 'green.5'}} />
      ) : (
        <StyledOcticon icon={ClippyIcon} sx={{color: 'gray.5'}} />
      )}
    </Button>
  )
}

export default ClipboardCopy
