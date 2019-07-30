import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

const List = styled.ul`
  padding-left: 2em;

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
    word-wrap: break-all;
  }

  li > p {
    margin-top: ${themeGet('space.3')}px;
  }

  li + li {
    margin-top: ${themeGet('space.1')}px;
  }
`

export default List
