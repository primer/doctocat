import React from 'react'
import {H2} from './heading'
import checklistSchema from '../checklist-schema'
import {Box, StyledOcticon} from '@primer/components'
import {CheckCircleFillIcon, CircleIcon} from '@primer/octicons-react'

type ChecklistSchema = {
  title: string
  items: {[id: string]: {description: string}}
}

type ChecklistProps = {
  checklist: {[id: string]: boolean}
  schema: ChecklistSchema
}

function Checklist({checklist, schema}: ChecklistProps) {
  return (
    <>
      <H2>{schema.title}</H2>
      <Box display="grid" gridGap={2}>
        {Object.entries(schema.items).map(([id, item]) => {
          const checked = Boolean(checklist[id])
          return (
            <ChecklistItem checked={checked} key={id}>
              {item.description}
            </ChecklistItem>
          )
        })}
      </Box>
    </>
  )
}

type ChecklistItemProps = {
  checked: boolean
}

// TODO: ask for accessibility review on checklist items
function ChecklistItem({checked, children}: React.PropsWithChildren<ChecklistItemProps>) {
  return (
    <Box display="grid" gridTemplateColumns="auto 1fr" gridGap={2}>
      <Box height="24px" display="flex" alignItems="center">
        {checked ? (
          <StyledOcticon icon={CheckCircleFillIcon} color="success.fg" />
        ) : (
          <StyledOcticon icon={CircleIcon} color="border.default" />
        )}
      </Box>
      {children}
    </Box>
  )
}

export default Checklist
