import styled from 'styled-components'
import {HEADER_HEIGHT} from './header'

const Superscript = styled.sup`
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
  top: -0.5em;
  scroll-margin-top: ${HEADER_HEIGHT + 24}px;

  a {
    text-decoration: none;

    ::before {
      content: '[';
    }

    ::after {
      content: ']';
    }
  }
`

export default Superscript
