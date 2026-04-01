import {PencilIcon} from '@primer/octicons-react'
import {Link} from '@primer/react'
import React from 'react'
import Contributors from './contributors'
import VisuallyHidden from './visually-hidden'

function PageFooter({editUrl, contributors}) {
  return editUrl || contributors.length > 0 ? (
    <footer
      aria-labelledby="footer-heading"
      style={{
        borderWidth: 0,
        borderTopWidth: 1,
        borderRadius: 0,
        marginTop: 64,
        paddingTop: 20,
        paddingBottom: 20,
        borderStyle: 'solid',
        borderColor: 'var(--borderColor-default, var(--color-border-default))',
      }}
    >
      <VisuallyHidden>
        <h2 id="footer-heading">Footer</h2>
      </VisuallyHidden>
      <div style={{display: 'grid', gap: 16}}>
        {editUrl ? (
          <Link href={editUrl}>
            <PencilIcon style={{marginRight: 8}} />
            Edit this page on GitHub
          </Link>
        ) : null}

        {contributors.length > 0 ? <Contributors contributors={contributors} /> : null}
      </div>
    </footer>
  ) : null
}

PageFooter.defaultProps = {
  contributors: [],
}

export default PageFooter
