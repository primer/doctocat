import {Button} from '@primer/react'
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
      style={{paddingLeft: 8, paddingRight: 8}}
    >
      {copied ? (
        <CheckIcon style={{color: 'var(--fgColor-success, var(--color-success-fg))'}} />
      ) : (
        <CopyIcon style={{color: 'var(--fgColor-muted, var(--color-fg-muted))'}} />
      )}
    </Button>
  )
}

export default ClipboardCopy
