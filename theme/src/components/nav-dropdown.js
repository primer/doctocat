import {ActionMenu, ActionList, themeGet, useDetails, sx} from '@primer/react'
import React from 'react'
import styled from 'styled-components'

const ButtonBase = styled(ActionMenu.Button)`
  :hover:not([disabled]) {
    background-color: ${themeGet('colors.neutral.subtle')};
  }
  ${sx}
`

function NavDropdown({title, children}) {
  const {getDetailsProps} = useDetails({closeOnOutsideClick: true})
  return (
    <ActionMenu {...getDetailsProps()}>
      <ButtonBase variant="invisible" sx={{fontSize: 2, color: 'fg.default'}}>
        {title}
      </ButtonBase>
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
