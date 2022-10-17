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
    border-color: ${themeGet('colors.border.muted')};
    border-style: solid;
    border-width: 0;
    border-left-width: ${themeGet('borderWidths.1')};
    border-top-width: ${themeGet('borderWidths.1')};
  }

  tr:last-child td {
    border-bottom-width: ${themeGet('borderWidths.1')};
  }

  tr td:last-child,
  tr th:last-child {
    border-right-width: ${themeGet('borderWidths.1')};
  }

  thead th:first-child {
    border-top-left-radius: ${themeGet('radii.2')};
  }

  thead th:last-child {
    border-top-right-radius: ${themeGet('radii.2')};
  }

  tbody tr:last-child td:last-child {
    border-bottom-right-radius: ${themeGet('radii.2')};
  }

  tbody tr:last-child td:first-child {
    border-bottom-left-radius: ${themeGet('radii.2')};
  }

  img {
    background-color: transparent;
    vertical-align: middle;
  }
`

export default Table
