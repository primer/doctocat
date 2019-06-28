import {BorderBox, Text} from '@primer/components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import React from 'react'

function Code({className, children}) {
  const language = className ? className.replace(/language-/, '') : null
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <BorderBox
          as="pre"
          className={className}
          style={{...style, overflow: 'auto'}}
          border={0}
        >
          <Text display="inline-block" p={3} fontFamily="mono" fontSize={1}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </Text>
        </BorderBox>
      )}
    </Highlight>
  )
}

export default Code
