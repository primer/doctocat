import {Box, Link, StyledOcticon} from '@primer/react'
import {PencilIcon} from '@primer/octicons-react'
import React from 'react'
import Contributors from './contributors'

function PageFooter({editUrl, contributors}) {
  return editUrl || contributors.length > 0 ? (
    <Box
      borderStyle="solid"
      borderColor="border.default"
      borderRadius={2}
      sx={{borderWidth: 0, borderTopWidth: 1, borderRadius: 0, mt: 8, py: 5}}
    >
      <Box display="grid" sx={{gridGap: 4}}>
        {editUrl ? (
          <Link href={editUrl}>
            <StyledOcticon icon={PencilIcon} sx={{mr: 2}} />
            Edit this page on GitHub
          </Link>
        ) : null}

        {contributors.length > 0 ? <Contributors contributors={contributors} /> : null}
      </Box>
    </Box>
  ) : null
}

PageFooter.defaultProps = {
  contributors: []
}

export default PageFooter
