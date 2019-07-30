import {Flex, Link, Sticky, StyledOcticon} from '@primer/components'
import {MarkGithub} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'

function Header() {
  return (
    <Sticky>
      <Flex px={5} py={3} alignItems="center" bg="gray.9">
        <StyledOcticon color="blue.4" icon={MarkGithub} size="medium" mr={3} />
        <Link as={GatsbyLink} to="/" mr={4} color="blue.4" fontFamily="mono">
          Primer
        </Link>
      </Flex>
    </Sticky>
  )
}

export default Header
