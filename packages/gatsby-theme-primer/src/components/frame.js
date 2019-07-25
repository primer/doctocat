import React from 'react'
import FrameComponent, {FrameContextConsumer} from 'react-frame-component'
import {StyleSheetManager} from 'styled-components'
import Measure from 'react-measure'

function Frame({children}) {
  const [height, setHeight] = React.useState('auto')
  return (
    <FrameComponent style={{width: '100%', border: 0, height}}>
      <FrameContextConsumer>
        {({document}) => {
          // TODO: explain why StyleSheetManager is necessary
          return (
            <StyleSheetManager target={document.head}>
              <Measure
                bounds={true}
                onResize={rect => setHeight(rect.bounds.height)}
              >
                {({measureRef}) => <div ref={measureRef}>{children}</div>}
              </Measure>
            </StyleSheetManager>
          )
        }}
      </FrameContextConsumer>
    </FrameComponent>
  )
}

export default Frame
