import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

const Table = styled.table`
  width: 100%;
  margin: 0 0 ${themeGet('space.3')};
  overflow: auto;
  border-collapse: separate;
  border-spacing: 0px;

  th {
    font-weight: ${themeGet('fontWeights.bold')};
    background-color: ${themeGet('colors.neutral.subtle')};
  }

  th,
  td {
    padding: ${themeGet('space.2')} ${themeGet('space.3')};
    border-left: 1px solid ${themeGet('colors.border.muted')};
    border-top: 1px solid ${themeGet('colors.border.muted')};
  }

  tr:last-child td {
    border-bottom: 1px solid ${themeGet('colors.border.muted')};
  }

  tr td:last-child,
  tr th:last-child {
    border-right: 1px solid ${themeGet('colors.border.muted')};
  }

  thead th:first-child {
    border-top-left-radius: 6px;
  }

  thead th:last-child {
    border-top-right-radius: 6px;
  }

  tbody tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
  }

  tbody tr:last-child td:first-child {
    border-bottom-left-radius: 6px;
  }

  img {
    background-color: transparent;
    vertical-align: middle;
  }
`

export default Table
