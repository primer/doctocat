import {MarkGithub} from '@githubprimer/octicons-react'
import {Flex, Sticky, StyledOcticon, Link} from '@primer/components'
import React from 'react'
import {Link as GatsbyLink} from 'gatsby'

function Header() {
  return (
    <Sticky>
      <Flex px={5} py={3} alignItems="center" bg="black">
        <StyledOcticon color="blue.4" icon={MarkGithub} size="medium" />
        <Link as={GatsbyLink} to="/" ml={3} color="blue.4" fontFamily="mono">
          Primer
        </Link>
      </Flex>
    </Sticky>
  )
}

export default Header
