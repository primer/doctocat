import {BorderBox, Grid, Link, StyledOcticon} from '@primer/components'
import {Pencil} from '@primer/octicons-react'
import React from 'react'
import Contributors from './contributors'

function PageFooter({editUrl, contributors}) {
  return editUrl || (contributors && contributors.length > 0) ? (
    <BorderBox border={0} borderRadius={0} borderTop={1} mt={8} py={6}>
      <Grid gridGap={4}>
        {editUrl ? (
          <Link href={editUrl}>
            <StyledOcticon icon={Pencil} mr={2} />
            Edit this page on GitHub
          </Link>
        ) : null}

        {contributors && contributors.length > 0 ? (
          <Contributors contributors={contributors} />
        ) : null}
      </Grid>
    </BorderBox>
  ) : null
}

export default PageFooter
