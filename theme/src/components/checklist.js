import React from 'react'
import {H2} from './heading'
import checklistSchema from '../checklist-schema'
import {Box, StyledOcticon} from '@primer/components'
import {CheckCircleFillIcon, CircleIcon} from '@primer/octicons-react'

function Checklist({checklist}) {
  return (
    <>
      {/* TODO: pick a better title */}
      <H2>Checklist</H2>
      <Box display="grid" gridGap={2}>
        {Object.entries(checklistSchema).map(([id, item]) => {
          // TODO: ask for accessibility review on checklist items

          const checked = Boolean(checklist[id])
          return (
            <Box key={id} display="grid" gridTemplateColumns="auto 1fr" gridGap={2}>
              <Box height="24px" display="flex" alignItems="center">
                {checked ? (
                  <StyledOcticon icon={CheckCircleFillIcon} color="success.fg" />
                ) : (
                  <StyledOcticon icon={CircleIcon} color="border.default" />
                )}
              </Box>
              {item.description}
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default Checklist
