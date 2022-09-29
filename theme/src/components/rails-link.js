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
        d="M3.92 1a1 1 0 0 0-.764.355L.236 4.812a1 1 0 0 0-.012 1.275l6.975 8.596a1 1 0 0 0 1.553 0l.972-1.197h.002l.002-.005 6-7.394a1 1 0 0 0-.013-1.275l-2.92-3.457A1 1 0 0 0 12.03 1H3.92Zm6.7 9 3.044-3.75h-2.082L10.62 10Zm.966-5.25h2.113l-1.9-2.25h-.776l.563 2.25ZM9.476 2.5l.563 2.25H5.961l.562-2.25h2.954Zm.557 3.75-1.677 6.54-.38.47-.31-.381-1.7-6.629h4.067Zm-7.781-1.5 1.9-2.25h.825l-.562 2.25H2.252Zm.035 1.5h2.131l.985 3.84-3.116-3.84Z"
      />
    </svg>
  )
}

export default SourceLink
