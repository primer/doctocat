import {
  Absolute,
  BorderBox,
  Details,
  Flex,
  StyledOcticon,
  Text,
  themeGet,
} from '@primer/components'
import {ChevronDown} from '@primer/octicons-react'
import React from 'react'
import styled from 'styled-components'

function NavDropdown({title, children}) {
  return (
    <Details overlay={true}>
      {({toggle}) => (
        <>
          <summary onClick={toggle} style={{cursor: 'pointer'}}>
            <Text>{title}</Text>
            <StyledOcticon icon={ChevronDown} ml={1} />
          </summary>
          <Absolute>
            <BorderBox
              bg="white"
              py={1}
              mt={2}
              boxShadow="medium"
              color="gray.8"
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
  padding: ${themeGet('space.2')}px ${themeGet('space.3')}px;
  color: inherit;
  text-decoration: none;

  &:hover {
    background-color: ${themeGet('colors.gray.2')};
  }
`

export default NavDropdown
