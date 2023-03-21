import {PencilIcon} from '@primer/octicons-react'
import {Box, Link, StyledOcticon} from '@primer/react'
import React from 'react'
import Contributors from './contributors'
import VisuallyHidden from './visually-hidden'

function PageFooter({editUrl, contributors}) {
  return editUrl || contributors.length > 0 ? (
    <Box
      as="footer"
      aria-labelledby="footer-heading"
      sx={{
        borderWidth: 0,
        borderTopWidth: 1,
        borderRadius: 0,
        mt: 8,
        py: 5,
        borderStyle: 'solid',
        borderColor: 'border.default'
      }}
    >
      <VisuallyHidden>
        <h2 id="footer-heading">Footer</h2>
      </VisuallyHidden>
      <Box sx={{gridGap: 4, display: 'grid'}}>
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
