import {
  Absolute,
  BorderBox,
  Details,
  Flex,
  StyledOcticon,
  Text,
} from '@primer/components'
import {ChevronDown} from '@primer/octicons-react'
import React from 'react'

function NavDropdown({title, children}) {
  return (
    <Details overlay={true}>
      {({toggle}) => (
        <>
          <Text
            as="summary"
            onClick={toggle}
            style={{cursor: 'pointer'}}
            px={2}
          >
            <Text>{title}</Text>
            <StyledOcticon icon={ChevronDown} ml={1} />
          </Text>
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

export default NavDropdown
