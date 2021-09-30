import {
  Absolute,
  BorderBox,
  StyledOcticon,
  Text,
  themeGet,
} from '@primer/components'
import {TriangleDownIcon} from '@primer/octicons-react'
import React from 'react'
import styled from 'styled-components'
import Details from './details'

function NavDropdown({title, children}) {
  return (
    <Details overlay={true}>
      {({toggle}) => (
        <>
          <summary style={{cursor: 'pointer'}} onClick={toggle}>
            <Text>{title}</Text>
            <StyledOcticon icon={TriangleDownIcon} ml={1} />
          </summary>
          <Absolute>
            <BorderBox
              bg="canvas.overlay"
              p={2}
              mt={2}
              borderColor="border.default"
              color="fg.default"
              borderRadius="12px"
            >
              {children}
            </BorderBox>
          </Absolute>
        </>
      )}
    </Details>
  )
}

export const NavDropdownItem = styled.a`
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
