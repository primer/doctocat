import React from 'react'
import {H2} from './heading'
import {Box, StyledOcticon} from '@primer/components'
import {CheckCircleFillIcon, CircleIcon} from '@primer/octicons-react'
import GithubSlugger from 'github-slugger'

export type ChecklistSchema = {
  title: string
  items: Array<{id: string; description: string}>
}

type ChecklistProps = {
  checklist: {[id: string]: boolean}
  schema: ChecklistSchema
}

function Checklist({checklist, schema}: ChecklistProps) {
  const id = React.useMemo(() => {
    const slugger = new GithubSlugger()
    return slugger.slug(schema.title)
  }, [schema.title])
  return (
    <>
      <H2 id={id}>{schema.title}</H2>
      <Box aria-describedby={id} as="ul" display="grid" gridGap={2} p={0} m={0}>
        {schema.items.map(({id, description}) => {
          const checked = Boolean(checklist[id])
          return (
            <ChecklistItem checked={checked} key={id}>
              {description}
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
    <Box as="li" display="grid" gridTemplateColumns="auto 1fr" gridGap={2} sx={{listStyleType: 'none'}}>
      <Box height="24px" display="flex" alignItems="center">
        {checked ? (
          <StyledOcticon aria-label="Completed" icon={CheckCircleFillIcon} color="success.fg" />
        ) : (
          <StyledOcticon aria-label="To do" icon={CircleIcon} color="border.default" />
        )}
      </Box>
      <span>{children}</span>
    </Box>
  )
}

export default Checklist
