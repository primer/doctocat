import {MDXContext} from '@mdx-js/react'
import React from 'react'

function TableOfContents({items}) {
  const {
    ul: List = 'ul',
    li: ListItem = 'li',
    a: Link = 'a',
  } = React.useContext(MDXContext)

  return (
    <List>
      {items.map(item => (
        <ListItem key={item.url}>
          <Link href={item.url}>{item.title}</Link>
          {item.items ? <TableOfContents items={item.items} /> : null}
        </ListItem>
      ))}
    </List>
  )
}

export default TableOfContents
