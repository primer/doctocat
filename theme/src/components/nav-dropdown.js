import {ActionMenu, ActionList, themeGet, useDetails} from '@primer/react'
import React from 'react'
import styled from 'styled-components'

function NavDropdown({title, children}) {
  const {getDetailsProps} = useDetails({closeOnOutsideClick: true})
  return (
    <ActionMenu {...getDetailsProps()}>
      <ActionMenu.Button
        variant="invisible"
        sx={{
          fontSize: 2,
          color: 'fg.default',
          ':hover:not([disabled])': {
            backgroundColor: 'canvas.subtle'
          }
        }}
      >
        {title}
      </ActionMenu.Button>
      <ActionMenu.Overlay width="auto">
        <ActionList>{children}</ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  )
}

export const NavDropdownItem = styled(ActionList.LinkItem)`
  display: block;
  padding: ${themeGet('space.2')};
  color: inherit;
  text-decoration: none;
  border-radius: ${themeGet('radii.2')};
  line-height: 1.25;

  &:hover {
    background-color: ${themeGet('colors.neutral.muted')};
    text-decoration: none;
  }
`

export default NavDropdown
