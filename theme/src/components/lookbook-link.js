import {Link, Text} from '@primer/react'
import React from 'react'

function SourceLink({href}) {
  return (
    <Link href={href} target="_blank">
      <LookbookIcon />
      <Text sx={{ml: 2, display: 'inline-block'}}>View Lookbook</Text>
    </Link>
  )
}

function LookbookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={16}
      height={16}
      fill="currentColor"
      style={{verticalAlign: 'text-bottom'}}
    >
      <path d="M49.4814 0C48.7181 0 48.2362 0.820805 48.6082 1.48737L70.8119 41.269C71.0655 41.7233 71.0655 42.2767 70.8119 42.731L48.6082 82.5126C48.2362 83.1792 48.7181 84 49.4814 84H71.8975C72.4412 84 72.9423 83.7058 73.2073 83.231L95.8119 42.731C96.0655 42.2767 96.0655 41.7233 95.8119 41.2689L73.2073 0.76895C72.9423 0.2942 72.4412 0 71.8975 0H49.4814ZM47.3741 41.269C47.6278 41.7233 47.6278 42.2767 47.3741 42.731L24.6554 83.4355C24.2739 84.119 23.2905 84.119 22.909 83.4355L0.190204 42.731C-0.063401 42.2767 -0.0634013 41.7233 0.190203 41.269L22.909 0.564484C23.2905 -0.119028 24.2739 -0.119029 24.6554 0.564482L47.3741 41.269Z" />
    </svg>
  )
}

export default SourceLink
