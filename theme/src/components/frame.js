import React from 'react'
import ReactDOM from 'react-dom'
import {StyleSheetManager} from 'styled-components'
import Measure from 'react-measure'

function Frame({children}) {
  const [height, setHeight] = React.useState('auto')
  const [iframeRef, setIframeRef] = React.useState(null)
  const contentDocument = iframeRef ? iframeRef.contentWindow.document : null

  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe ref={setIframeRef} style={{width: '100%', border: 0, borderRadius: 6, height}}>
      {
        // By default, styled-components injects styles in the head of the page.
        // However, styles from the page's head don't apply inside iframes.
        // We're using StyleSheetManager to make styled-components inject styles
        // into the head of the iframe instead.
        contentDocument !== null &&
          ReactDOM.createPortal(
            <StyleSheetManager target={contentDocument.head}>
              <Measure
                // iframes don't adjust to the height of their content by default.
                // We're using Measure to calculate the size of the content
                // and adjust the iframe's height dynamically.
                bounds={true}
                onResize={rect => setHeight(rect.bounds.height)}
              >
                {({measureRef}) => <div ref={measureRef}>{children}</div>}
              </Measure>
            </StyleSheetManager>,
            contentDocument.body
          )
      }
    </iframe>
  )
}

export default Frame
