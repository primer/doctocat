import {
  BorderBox,
  Box,
  Flex,
  Link,
  Sticky,
  StyledOcticon,
  themeGet,
} from '@primer/components'
import {MarkGithub, ThreeBars, X} from '@primer/octicons-react'
import {AnimatePresence, motion} from 'framer-motion'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Sidebar from './sidebar'

const MenuButton = styled.button`
  color: inherit;
  background-color: transparent;
  border: 0;
  padding: ${themeGet('space.1')}px;
  appearance: none;
  cursor: pointer;
`

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
              <MenuButton
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
                aria-haspop={true}
                aria-expanded={isOpen}
              >
                <StyledOcticon icon={isOpen ? X : ThreeBars} size={24} />
              </MenuButton>
            </Box>
          </Flex>
          <Flex
            display={['flex', null, null, 'none']}
            flexDirection="column"
            flex="1 1 auto"
            style={{
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <AnimatePresence>
              {isOpen ? (
                <motion.div
                  initial={{height: 0}}
                  animate={{height: 'auto'}}
                  exit={{height: 0}}
                >
                  <Sidebar />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Flex>
        </Flex>
      </BorderBox>
    </Sticky>
  )
}

export default Header
