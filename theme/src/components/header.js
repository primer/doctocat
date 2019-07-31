import {
  BorderBox,
  Box,
  Button,
  Flex,
  Link,
  Sticky,
  StyledOcticon,
} from '@primer/components'
import {MarkGithub, ThreeBars, X} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import Sidebar from './sidebar'

function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Sticky>
      <BorderBox border={0} borderRadius={0} boxShadow="medium">
        <Flex flexDirection="column" maxHeight="100vh">
          <Flex px={4} py={3} alignItems="center" color="blue.4" bg="gray.9">
            <StyledOcticon icon={MarkGithub} size="medium" mr={3} />
            <Link
              as={GatsbyLink}
              to="/"
              mr={4}
              color="inherit"
              fontFamily="mono"
            >
              Primer
            </Link>
            <Box mx="auto" />
            <Box display={['block', null, null, 'none']}>
              <Button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
                aria-haspop={true}
                aria-expanded={isOpen}
              >
                <StyledOcticon icon={isOpen ? X : ThreeBars} />
              </Button>
            </Box>
          </Flex>
          {isOpen ? (
            <Flex
              display={['flex', null, null, 'none']}
              flexDirection="column"
              flex="1 1 auto"
              style={{overflow: 'auto '}}
            >
              <Sidebar />
            </Flex>
          ) : null}
        </Flex>
      </BorderBox>
    </Sticky>
  )
}

export default Header
