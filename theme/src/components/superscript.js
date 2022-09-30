import styled from 'styled-components'

const Superscript = styled.sup`
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
  top: -0.5em;

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
