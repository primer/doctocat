import {Box, StyledOcticon, Text} from '@primer/react'
import {CheckCircleFillIcon, XCircleFillIcon} from '@primer/octicons-react'
import React from 'react'

export function DoDontContainer({stacked, children}) {
  return (
    <Box display="grid" gridTemplateColumns={['1fr', null, stacked ? '1fr' : '1fr 1fr']} gridGap={4} mb={4}>
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
    <Box display="flex" flexDirection="column">
      <Box display="flex" alignSelf="start" flexDirection="row" alignItems="center" mb="2">
        <StyledOcticon icon={Icon} sx={{color: iconBg}} />
        <Text fontWeight="bold" color="fg.default" ml={2}>
          {title}
        </Text>
      </Box>
      <Box display="flex" flexDirection="column" sx={{'& *:last-child': {mb: 0}, img: {maxWidth: '100%'}}}>
        {children}
      </Box>
    </Box>
  )
}
