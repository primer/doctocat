import {BaseStyles, themeGet} from '@primer/react'
import React from 'react'
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    color: ${themeGet('colors.fg.default')};
    background-color: ${themeGet('colors.canvas.default')};
  }

  .footnotes {
    font-size: ${themeGet('fontSizes.1')};
    color: ${themeGet('colors.fg.subtle')};

    ol {
      padding-left: ${themeGet('space.3')};
    }

  .footnote-backref {
      font-family: ${themeGet('fonts.mono')};
      margin-left: 2px;
      text-decoration: none;
    }
  }

  /* Responsive layout utilities (replaces sx responsive array values) */

  /* Sidebar: hidden on mobile, visible at lg (1012px+) */
  .sidebar-wrapper {
    display: none;
  }
  @media (min-width: 1012px) {
    .sidebar-wrapper {
      display: block;
    }
  }

  /* Desktop nav: hidden on mobile, flex at lg (1012px+) */
  .desktop-nav {
    display: none;
  }
  @media (min-width: 1012px) {
    .desktop-nav {
      display: flex;
    }
  }

  /* Desktop search: hidden on mobile, block at lg (1012px+) */
  .desktop-search {
    display: none;
  }
  @media (min-width: 1012px) {
    .desktop-search {
      display: block;
    }
  }

  /* Mobile controls: flex on mobile, hidden at lg (1012px+) */
  .mobile-controls {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1012px) {
    .mobile-controls {
      display: none;
    }
  }

  /* TOC sidebar: hidden on mobile, block at md (768px+) */
  .toc-sidebar {
    display: none;
  }
  @media (min-width: 768px) {
    .toc-sidebar {
      display: block;
    }
  }

  /* Mobile TOC: block on mobile, hidden at md (768px+) */
  .mobile-toc {
    display: block;
  }
  @media (min-width: 768px) {
    .mobile-toc {
      display: none;
    }
  }

  /* Image max-width inside containers */
  .image-container img,
  .do-dont-content img {
    max-width: 100%;
  }

  /* Do/Dont last child margin */
  .do-dont-content > *:last-child {
    margin-bottom: 0;
  }
`

function wrapPageElement({element}) {
  return (
    <BaseStyles>
      <GlobalStyles />
      {element}
    </BaseStyles>
  )
}

export default wrapPageElement
