import {Absolute, BorderBox, Relative, Text} from '@primer/components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import React from 'react'
import ClipboardCopy from './clipboard-copy'

function Code({className, children}) {
  const language = className ? className.replace(/language-/, '') : null
  return (
    <Relative>
      <Absolute top={0} right={0} p={2}>
        <ClipboardCopy value={children} />
      </Absolute>
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
    </Relative>
  )
}

export default Code
