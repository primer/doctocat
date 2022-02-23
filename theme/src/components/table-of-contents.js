import {Box, Link} from '@primer/react'
import React from 'react'

function TableOfContents({items, depth}) {
  return (
    <Box as="ul" m={0} p={0} css={{listStyle: 'none'}}>
      {items.map(item => (
        <Box as="li" key={item.url} pl={depth > 0 ? 3 : 0}>
          {item.title ? (
            <Link
              href={item.url}
              sx={{
                display: 'inline-block',
                py: 1,
                fontSize: [2, null, 1],
                color: 'fg.muted'
              }}
            >
              {item.title}
            </Link>
          ) : null}
          {item.items ? <TableOfContents items={item.items} depth={depth + 1} /> : null}
        </Box>
      ))}
    </Box>
  )
}

TableOfContents.defaultProps = {
  depth: 0
}

export default TableOfContents
