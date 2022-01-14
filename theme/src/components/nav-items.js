import {ActionList} from '@primer/react/lib-esm/drafts'
import {LinkExternalIcon} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import preval from 'preval.macro'
import React from 'react'

// This code needs to run at build-time so it can access the file system.
const repositoryUrl = preval`
  const readPkgUp = require('read-pkg-up')
  const getPkgRepo = require('get-pkg-repo')
  try {
    const repo = getPkgRepo(readPkgUp.sync().package)
    module.exports = \`https://github.com/\${repo.user}/\${repo.project}\`
  } catch (error) {
    module.exports = ''
  }
`

function NavItems({items}) {
  return (
    <ActionList
      sx={{
        m: 2,
        'a[aria-current]': {
          position: 'relative',
          bg: 'actionListItem.default.selectedBg',
          '::after': {
            content: '""',
            position: 'absolute',
            top: 'calc(50% - 12px)',
            left: '-8px',
            width: 4,
            height: 24,
            bg: 'accent.fg',
            borderRadius: 6
          }
        }
      }}
    >
      {items.map(item => {
        if (item.children) {
          return (
            <>
              <ActionList.Group title={item.title}>
                {item.children.map(child => (
                  <ActionList.LinkItem key={child.url} as={GatsbyLink} to={child.url}>
                    {child.title}
                  </ActionList.LinkItem>
                ))}
              </ActionList.Group>
              <ActionList.Divider />
            </>
          )
        } else {
          return (
            <ActionList.LinkItem key={item.url} href={item.url} activeClassName="active">
              {item.title}
            </ActionList.LinkItem>
          )
        }
      })}
      {repositoryUrl ? (
        <ActionList.LinkItem href={repositoryUrl} target="_blank">
          GitHub
          <ActionList.TrailingVisual>
            <LinkExternalIcon />
          </ActionList.TrailingVisual>
        </ActionList.LinkItem>
      ) : null}
    </ActionList>
  )
}

export default NavItems
