import {Link, Text, Box} from '@primer/react'
import React from 'react'

function SourceLink({href}) {
  return (
    <Link href={href} target="_blank">
      <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
        <RailsLogo />
        <Text>Rails</Text>
      </Box>
    </Link>
  )
}

function RailsLogo() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      width={16}
      height={16}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.148 1.682a1 1 0 0 1 .786-.382h8.132a1 1 0 0 1 .786.382l2.934 3.735a1 1 0 0 1-.049 1.292l-.075.083v.004h-.004l-6.921 7.55a1 1 0 0 1-1.474 0l-7-7.637a1 1 0 0 1-.05-1.292l2.935-3.735Zm10.638 3.615L11.823 2.8h-.953l.51 2.498h2.406Zm-2.724 1.5h2.562l-3.877 4.23 1.315-4.23Zm-1.212-1.5L9.34 2.8H6.995l-.51 2.498H9.85Zm-3.057 1.5h2.7l-1.427 4.588-1.273-4.589Zm-1.838-1.5.51-2.498H4.177L2.214 5.297h2.741Zm-2.58 1.5h2.863l1.241 4.476-4.103-4.477Z"
      />
    </svg>
  )
}

export default SourceLink
