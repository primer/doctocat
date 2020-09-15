import {Flex, Grid, StyledOcticon, Text} from '@primer/components'
import {CheckCircleFillIcon, XCircleFillIcon} from '@primer/octicons-react'
import React from 'react'

export function DoDontContainer({stacked, children}) {
  return (
    <Grid
      gridTemplateColumns={['1fr', null, stacked ? '1fr' : '1fr 1fr']}
      gridGap={3}
      mb={3}
    >
      {children}
    </Grid>
  )
}

DoDontContainer.defaultProps = {
  stacked: false,
}

export function Do(props) {
  return (
    <DoDontBase
      {...props}
      title="Do"
      icon={CheckCircleFillIcon}
      iconBg="green.5"
    />
  )
}

export function Dont(props) {
  return (
    <DoDontBase
      {...props}
      title="Don't"
      icon={XCircleFillIcon}
      iconBg="red.5"
    />
  )
}

function DoDontBase({children, title, icon: Icon, iconBg}) {
  return (
    <Flex flexDirection="column">
      <Flex alignSelf="start" flexDirection="row" alignItems="center" mb="2">
        <StyledOcticon icon={Icon} color={iconBg} />
        <Text fontWeight="bold" color="gray.9" ml={2}>
          {title}
        </Text>
      </Flex>
      <Flex flexDirection="column" sx={{'& *:last-child': {mb: 0}}}>
        {children}
      </Flex>
    </Flex>
  )
}
