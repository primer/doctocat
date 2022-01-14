import {Box, Details, StyledOcticon, Text, themeGet, useDetails} from '@primer/react'
import {TriangleDownIcon} from '@primer/octicons-react'
import React from 'react'
import styled from 'styled-components'

function NavDropdown({title, children}) {
  const {getDetailsProps} = useDetails({closeOnOutsideClick: true})
  return (
    <Details {...getDetailsProps()}>
      <summary style={{cursor: 'pointer'}}>
        <Text>{title}</Text>
        <StyledOcticon icon={TriangleDownIcon} sx={{ml: 1}} />
      </summary>
      <Box position="absolute">
        <Box
          bg="canvas.overlay"
          p={2}
          mt={2}
          borderWidth="1px"
          borderStyle="solid"
          borderColor="border.default"
          borderRadius="12px"
        >
          {children}
        </Box>
      </Box>
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
