import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

const Table = styled.table`
  display: block;
  width: 100%;
  margin: 0 0 ${themeGet('space.3')};
  overflow: auto;

  th {
    font-weight: ${themeGet('fontWeights.bold')};
  }

  th,
  td {
    padding: ${themeGet('space.2')} ${themeGet('space.3')};
    border: 1px solid ${themeGet('colors.border.muted')};
  }

  tr {
    background-color: ${themeGet('colors.white')};
    border-top: 1px solid ${themeGet('colors.border.muted')};

    &:nth-child(2n) {
      background-color: ${themeGet('colors.neutral.subtle')};
    }
  }

  img {
    background-color: transparent;
    vertical-align: middle;
  }
`

export default Table
