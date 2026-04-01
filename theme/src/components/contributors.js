import {Avatar, Link, Text} from '@primer/react'
import {Tooltip} from '@primer/react/next'
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
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Text style={{marginRight: 8}}>
          {uniqueContributors.length} {pluralize('contributor', uniqueContributors.length)}
        </Text>
        {uniqueContributors.map(contributor => (
          <Tooltip key={contributor.login} text={contributor.login}>
            <Link
              key={contributor.login}
              href={`https://github.com/${contributor.login}`}
              style={{marginRight: 8, lineHeight: '1'}}
            >
              <Avatar src={`https://github.com/${contributor.login}.png?size=40`} alt={contributor.login} />
            </Link>
          </Tooltip>
        ))}
      </div>

      {latestContributor.latestCommit ? (
        <Text style={{fontSize: 12, color: 'var(--fgColor-muted, var(--color-fg-muted))', marginTop: 4}}>
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
