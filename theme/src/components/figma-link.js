import {Link, Text} from '@primer/react'
import React from 'react'

function SourceLink({href}) {
  return (
    <Link href={href} target="_blank">
      <FigmaLogo />
      <Text sx={{ml: 2, display: 'inline-block'}}>View Figma</Text>
    </Link>
  )
}

function FigmaLogo() {
  return (
    <svg
      width={16}
      height={16}
      aria-hidden="true"
      style={{verticalAlign: 'text-bottom'}}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 172 247"
    >
      <g stroke="currentColor" strokeWidth="15.081">
        <path d="M164 46.5c0 21.263-17.237 38.5-38.5 38.5H86V8h39.5C146.763 8 164 25.237 164 46.5ZM8 46.5C8 67.763 25.237 85 46.5 85H86V8H46.5C25.237 8 8 25.237 8 46.5ZM8 123.501c0 21.263 17.237 38.5 38.5 38.5H86v-77H46.5c-21.263 0-38.5 17.237-38.5 38.5Z" />
        <path d="M8 200.5C8 221.763 25.485 239 46.748 239 68.288 239 86 221.539 86 200v-38H46.5C25.237 162 8 179.237 8 200.5ZM86 123.501c0 21.263 17.237 38.5 38.5 38.5h1c21.263 0 38.5-17.237 38.5-38.5s-17.237-38.5-38.5-38.5h-1c-21.263 0-38.5 17.237-38.5 38.5Z" />
      </g>
    </svg>
  )
}

export default SourceLink
