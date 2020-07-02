import {BorderBox, StyledOcticon, Grid, Link} from '@primer/components'
import {PencilIcon} from '@primer/octicons-react'
import React from 'react'
import Contributors from './contributors'

function PageFooter({editUrl, contributors}) {
  return editUrl || contributors.length > 0 ? (
    <BorderBox border={0} borderRadius={0} borderTop={1} mt={8} py={5}>
      <Grid gridGap={4}>
        {editUrl ? (
          <Link href={editUrl}>
            <StyledOcticon icon={PencilIcon} mr={2} />
            Edit this page on GitHub
          </Link>
        ) : null}

        {contributors.length > 0 ? (
          <Contributors contributors={contributors} />
        ) : null}
      </Grid>
    </BorderBox>
  ) : null
}

PageFooter.defaultProps = {
  contributors: [],
}

export default PageFooter
