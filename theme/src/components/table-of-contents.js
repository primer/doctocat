import {MDXContext} from '@mdx-js/react'
import React from 'react'

function TableOfContents({items}) {
  const {h2: H2 = 'h2'} = React.useContext(MDXContext)

  return (
    <>
      <H2>Table of contents</H2>
      <TableOfContentsItems items={items} />
    </>
  )
}

function TableOfContentsItems({items}) {
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
          {item.items ? <TableOfContentsItems items={item.items} /> : null}
        </ListItem>
      ))}
    </List>
  )
}

export default TableOfContents
