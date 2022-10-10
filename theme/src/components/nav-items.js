import {FocusKeys} from '@primer/behaviors'
import {LinkExternalIcon} from '@primer/octicons-react'
import {NavList,useFocusZone} from '@primer/react'
import {useLocation} from '@reach/router'
import {Link as GatsbyLink, withPrefix} from 'gatsby'
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

function NavItem({href, children}) {
  const location = useLocation()
  const isCurrent = withPrefix(href) === location.pathname
  return (
    <NavList.Item as={GatsbyLink} to={href} aria-current={isCurrent ? 'page' : null}>
      {children}
    </NavList.Item>
  )
}

function NavItems({items}) {
  const {containerRef} = useFocusZone({bindKeys: FocusKeys.ArrowVertical | FocusKeys.HomeAndEnd})
  return (
    <NavList ref={containerRef}>
      {items.map(item => (
        <React.Fragment key={item.title}>
          {item.children ? (
            <NavList.Group title={item.title}>
              {item.children.map(child => (
                <NavItem key={child.title} href={child.url}>
                  {child.title}
                </NavItem>
              ))}
            </NavList.Group>
          ) : (
            <NavItem href={item.url}>{item.title}</NavItem>
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
