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
      <path d="M12.3701 0C12.1793 0 12.0588 0.205201 12.1518 0.371843L17.7026 10.3173C17.766 10.4308 17.766 10.5692 17.7026 10.6827L12.1518 20.6282C12.0588 20.7948 12.1793 21 12.3701 21H17.974C18.1099 21 18.2352 20.9265 18.3014 20.8078L23.9524 10.6827C24.0158 10.5692 24.0158 10.4308 23.9524 10.3172L18.3014 0.192237C18.2352 0.07355 18.1099 0 17.974 0H12.3701ZM11.8433 10.3173C11.9067 10.4308 11.9067 10.5692 11.8433 10.6827L6.16371 20.8589C6.06834 21.0298 5.8225 21.0298 5.72712 20.8589L0.04755 10.6827C-0.0158499 10.5692 -0.01585 10.4308 0.0475497 10.3173L5.72712 0.141121C5.8225 -0.029757 6.06834 -0.0297573 6.16371 0.14112L11.8433 10.3173Z" />
    </svg>
  )
}

export default SourceLink
