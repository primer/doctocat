import {graphql, useStaticQuery} from 'gatsby'
import React from 'react'
import Checklist from './checklist'

type ChecklistSchemaQuery = {
  allChecklistSchema: {
    nodes: Array<{
      name: string
      title: string
      items: Array<{id: string; description: string}>
    }>
  }
}

function Checklists({frontmatter}: {frontmatter: Record<string, any>}) {
  const data = useStaticQuery<ChecklistSchemaQuery>(graphql`
    query ChecklistSchemaQuery {
      allChecklistSchema {
        nodes {
          name
          title
          items {
            id
            description
          }
        }
      }
    }
  `)

  const checklistSchemas = data.allChecklistSchema.nodes

  const checklists = checklistSchemas
    .map(schema => {
      const key = `${schema.name}Checklist`

      if (!(key in frontmatter)) {
        return null
      }

      return <Checklist checklist={frontmatter[key]} schema={schema} />
    })
    .filter(Boolean)

  return checklists
}

export default Checklists
