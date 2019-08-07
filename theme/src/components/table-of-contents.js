import {Link} from '@primer/components'
import React from 'react'
import {H2} from './heading'
import List from './list'

// TODO: get components from MDX context instead of importing them

function TableOfContents({items}) {
  return (
    <>
      <H2>Table of contents</H2>
      <TableOfContentsItems items={items} />
    </>
  )
}
function TableOfContentsItems({items}) {
  return (
    <List>
      {items.map(item => (
        <li>
          <Link href={item.url}>{item.title}</Link>
          {item.items ? <TableOfContentsItems items={item.items} /> : null}
        </li>
      ))}
    </List>
  )
}

export default TableOfContents
