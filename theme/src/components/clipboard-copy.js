import {Button, Octicon} from '@primer/react'
import {CheckIcon, CopyIcon} from '@primer/octicons-react'
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
      aria-label="Copy to clipboard"
      onClick={() => {
        copy(value)
        setCopied(true)
      }}
      sx={{px: 2}}
    >
      {copied ? (
        <Octicon icon={CheckIcon} sx={{color: 'success.fg'}} />
      ) : (
        <Octicon icon={CopyIcon} sx={{color: 'fg.muted'}} />
      )}
    </Button>
  )
}

export default ClipboardCopy
