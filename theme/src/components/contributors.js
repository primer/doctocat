import React from 'react'
import {Text, Link, Avatar, Flex, Tooltip} from '@primer/components'
import pluralize from 'pluralize'

function Contributors({contributors}) {
  const latestContributor = contributors[0]
  return (
    <div>
      <Flex alignItems="center" mb={1}>
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
              <Avatar src={contributor.avatarUrl} alt={contributor.login} />
            </Tooltip>
          </Link>
        ))}
      </Flex>

      <Text fontSize={1} color="gray.7">
        Last edited by{' '}
        <Link href={`https://github.com/${latestContributor.login}`}>
          {latestContributor.login}
        </Link>{' '}
        on{' '}
        <Link href={latestContributor.latestCommit.url}>
          {latestContributor.latestCommit.date}
        </Link>
      </Text>
    </div>
  )
}

export default Contributors
