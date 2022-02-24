import {Box, Link, StyledOcticon, themeGet} from '@primer/react'
import {LinkExternalIcon} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import preval from 'preval.macro'
import React from 'react'
import styled from 'styled-components'

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
    <>
      {items.map(item => (
        <Box
          key={item.title}
          sx={{
            borderWidth: 0,
            borderRadius: 0,
            borderTopWidth: 1,
            borderStyle: 'solid',
            borderColor: 'border.muted',
            p: 4
          }}
        >
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <NavLink
              as={GatsbyLink}
              to={item.url}
              activeClassName="active"
              partiallyActive={true}
              sx={{color: 'inherit'}}
            >
              {item.title}
            </NavLink>
            {item.children ? (
              <Box sx={{display: 'flex', flexDirection: 'column', mt: 2}}>
                {item.children.map(child => (
                  <NavLink
                    key={child.title}
                    as={GatsbyLink}
                    to={child.url}
                    activeClassName="active"
                    sx={{
                      display: 'block',
                      py: 1,
                      mt: 2,
                      fontSize: 1
                    }}
                  >
                    {child.title}
                  </NavLink>
                ))}
              </Box>
            ) : null}
          </Box>
        </Box>
      ))}
      {repositoryUrl ? (
        <Box
          sx={{
            borderWidth: 0,
            borderTopWidth: 1,
            borderRadius: 0,
            borderStyle: 'solid',
            borderColor: 'border.default',
            p: 4
          }}
        >
          <Link href={repositoryUrl} sx={{color: 'inherit'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              GitHub
              <StyledOcticon icon={LinkExternalIcon} sx={{color: 'fg.muted'}} />
            </Box>
          </Link>
        </Box>
      ) : null}
    </>
  )
}

export default NavItems
