import {Box, StyledOcticon, Text} from '@primer/react'
import {CheckCircleFillIcon, XCircleFillIcon} from '@primer/octicons-react'
import React from 'react'

export function DoDontContainer({stacked, children}) {
  return (
    <Box sx={{display: 'grid', gridTemplateColumns: ['1fr', null, stacked ? '1fr' : '1fr 1fr'], gridGap: 4, mb: 4}}>
      {children}
    </Box>
  )
}

DoDontContainer.defaultProps = {
  stacked: false
}

export function Do(props) {
  return <DoDontBase {...props} title="Do" icon={CheckCircleFillIcon} iconBg="success.fg" />
}

export function Dont(props) {
  return <DoDontBase {...props} title="Don't" icon={XCircleFillIcon} iconBg="danger.fg" />
}

function DoDontBase({children, title, icon: Icon, iconBg}) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Box sx={{display: 'flex', alignSelf: 'start', flexDirection: 'row', alignItems: 'center', mb: '2'}}>
        <StyledOcticon icon={Icon} sx={{color: iconBg}} />
        <Text sx={{fontWeight: 'bold', color: 'fg.default', ml: 2}}>{title}</Text>
      </Box>
      <Box sx={{'& *:last-child': {mb: 0}, img: {maxWidth: '100%'}, display: 'flex', flexDirection: 'column'}}>
        {children}
      </Box>
    </Box>
  )
}
