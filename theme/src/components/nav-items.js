import {Box, Link, StyledOcticon, themeGet} from '@primer/react'
import {LinkExternalIcon} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import preval from 'preval.macro'
import React from 'react'
import styled from 'styled-components'
import {NavList} from '@primer/react/drafts'

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

const NavLink = styled(Link)`
  &.active {
    font-weight: ${themeGet('fontWeights.bold')};
    color: ${themeGet('colors.fg.default')};
  }
`

function NavItems({items}) {
  return (
    <NavList>
      {items.map(item => (
        <React.Fragment key={item.title}>
          {item.children ? (
            <NavList.Group title={item.title}>
              {item.children.map(child => (
                <NavList.Item
                  key={child.title}
                  // as={GatsbyLink}
                  href={child.url}
                  // activeClassName="active"
                >
                  {child.title}
                </NavList.Item>
              ))}
            </NavList.Group>
          ) : (
            <NavList.Item href={item.url}>{item.title}</NavList.Item>
          )}
        </React.Fragment>
      ))}
      {repositoryUrl ? (
        <>
          <NavList.Divider />
          <NavList.Item href={repositoryUrl}>
            GitHub
            <NavList.TrailingVisual>
              <LinkExternalIcon />
            </NavList.TrailingVisual>
          </NavList.Item>
        </>
      ) : null}
    </NavList>
  )
}

export default NavItems
