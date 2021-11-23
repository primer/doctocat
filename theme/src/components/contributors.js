import {Avatar, Box, Link, Text, Tooltip} from '@primer/components'
import {format} from 'date-fns'
import uniqBy from 'lodash.uniqby'
import pluralize from 'pluralize'
import React from 'react'

// The `contributors` array is fetched in gatsby-node.js at build-time.

function Contributors({contributors}) {
  const uniqueContributors = uniqBy(contributors, 'login')
  const latestContributor = uniqueContributors[0] || {}

  return (
    <div>
      <Box display="flex" alignItems="center">
        <Text mr={2}>
          {uniqueContributors.length} {pluralize('contributor', uniqueContributors.length)}
        </Text>
        {uniqueContributors.map(contributor => (
          <Link
            key={contributor.login}
            href={`https://github.com/${contributor.login}`}
            sx={{mr: 2, lineHeight: 'condensedUltra'}}
          >
            <Tooltip key={contributor.login} aria-label={contributor.login}>
              <Avatar src={`https://github.com/${contributor.login}.png?size=40`} alt={contributor.login} />
            </Tooltip>
          </Link>
        ))}
      </Box>

      {latestContributor.latestCommit ? (
        <Text fontSize={1} color="fg.muted" mt={1}>
          Last edited by <Link href={`https://github.com/${latestContributor.login}`}>{latestContributor.login}</Link>{' '}
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
