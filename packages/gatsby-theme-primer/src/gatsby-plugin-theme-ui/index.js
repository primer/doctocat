import merge from 'lodash.merge'
import {theme} from '@primer/components'

export default merge({}, theme, {
  styles: {
    h1: {
      mt: 4,
      mb: 3,
      pb: 1,
      fontSize: 5,
      fontWeight: 'bold',
      borderBottom: 1,
      borderColor: 'gray.2',
    },
    h2: {
      mt: 4,
      mb: 3,
      pb: 1,
      fontSize: 4,
      fontWeight: 'bold',
      borderBottom: 1,
      borderColor: 'gray.2',
    },
    h3: {
      mt: 4,
      mb: 3,
      fontSize: 3,
      fontWeight: 'bold',
    },
    h4: {
      mt: 4,
      mb: 3,
      fontSize: 2,
      fontWeight: 'bold',
    },
    h5: {
      mt: 4,
      mb: 3,
      fontSize: 1,
      fontWeight: 'bold',
    },
    h6: {
      mt: 4,
      mb: 3,
      fontSize: 1,
      fontWeight: 'bold',
      color: 'gray.5',
    },
    p: {
      mt: 0,
      mb: 3,
    },
    strong: {
      fontWeight: 'bold',
    },
    a: {
      color: 'blue.5',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    hr: {
      height: '0.25em',
      my: 4,
      mx: 0,
      p: 0,
      bg: 'gray.2',
      border: 0,
    },
    blockquote: {
      mt: 0,
      mx: 0,
      mb: 3,
      px: 3,
      color: 'gray.5',
      borderLeft: '0.25em solid',
      borderColor: 'gray.2',
      '& > :first-of-type': {
        mt: 0,
      },
      '& > :last-of-type': {
        mb: 0,
      },
    },
    img: {
      maxWidth: '100%',
      boxSizing: 'content-box',
      bg: 'white',
    },
    inlineCode: {
      padding: '0.2em 0.4em',
      fontFamily: 'mono',
      fontSize: '85%',
      backgroundColor: 'gray.1',
      borderRadius: 1,
    },
    table: {
      display: 'block',
      width: '100%',
      mt: 0,
      mx: 0,
      mb: 3,
      overflow: 'auto',
    },
    th: {
      px: 3,
      py: 2,
      fontWeight: 'bold',
      border: 1,
      borderColor: 'gray.2',
    },
    td: {
      px: 3,
      py: 2,
      border: 1,
      borderColor: 'gray.2',
    },
    tr: {
      bg: 'white',
      '&:nth-of-type(2n)': {
        bg: 'gray.1',
      },
    },
    ul: {
      pl: 5,
    },
    li: {
      wordWrap: 'break-all',
      '& + li': {
        mt: 1,
      },
    },
  },
})
