import {Avatar, Flex, Link, Text, Tooltip} from '@primer/components'
import {format} from 'date-fns'
import pluralize from 'pluralize'
import React from 'react'

// The `contributors` array is fetched in gatsby-node.js at build-time.

function Contributors({contributors}) {
  const latestContributor = contributors[0] || {}
  return (
    <div>
      <Flex alignItems="center">
        <Text mr={2}>
          {contributors.length} {pluralize('contributor', contributors.length)}
        </Text>
        {contributors.map(contributor => (
          <Link
            href={`https://github.com/${contributor.login}`}
            lineHeight="condensedUltra"
            mr={2}
          >
            <Tooltip key={contributor.login} aria-label={contributor.login}>
              <Avatar
                src={`https://github.com/${contributor.login}.png?size=40`}
                alt={contributor.login}
              />
            </Tooltip>
          </Link>
        ))}
      </Flex>

      {latestContributor.latestCommit ? (
        <Text fontSize={1} color="gray.7" mt={1}>
          Last edited by{' '}
          <Link href={`https://github.com/${latestContributor.login}`}>
            {latestContributor.login}
          </Link>{' '}
          on{' '}
          <Link href={latestContributor.latestCommit.url}>
            {format(new Date(latestContributor.latestCommit.date), 'MMMM d, y')}
          </Link>
        </Text>
      ) : null}
    </div>
  )
}

export default Contributors
