import {
  Absolute,
  BorderBox,
  StyledOcticon,
  Text,
  themeGet,
} from '@primer/components'
import {ChevronDown} from '@primer/octicons-react'
import React from 'react'
import styled from 'styled-components'

// TODO: Replace this Details component with the one from @primer/components when 14.0.0 is released.
// Reference: https://github.com/primer/components/pull/499
const Details = styled.details`
  & > summary {
    list-style: none;
  }

  & > summary::-webkit-details-marker {
    display: none;
  }
`

function NavDropdown({title, children}) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (open) {
      document.addEventListener('click', closeMenu)
      return () => {
        document.removeEventListener('click', closeMenu)
      }
    }
  }, [open])

  function toggle(event) {
    setOpen(event.target.open)
  }

  function closeMenu() {
    setOpen(false)
  }

  return (
    <Details open={open} onToggle={toggle}>
      <summary style={{cursor: 'pointer'}}>
        <Text>{title}</Text>
        <StyledOcticon icon={ChevronDown} ml={1} />
      </summary>
      <Absolute>
        <BorderBox bg="white" py={1} mt={2} boxShadow="medium" color="gray.8">
          {children}
        </BorderBox>
      </Absolute>
    </Details>
  )
}

export const NavDropdownItem = styled.a`
  display: block;
  padding: ${themeGet('space.2')}px ${themeGet('space.3')}px;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${themeGet('colors.white')};
    background-color: ${themeGet('colors.blue.5')};
  }
`

export default NavDropdown
