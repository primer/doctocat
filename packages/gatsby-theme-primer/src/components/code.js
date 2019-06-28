import {Absolute, BorderBox, Box, Relative, Text} from '@primer/components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import React from 'react'
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'
import ClipboardCopy from './clipboard-copy'

function Code({className, children, live}) {
  const language = className ? className.replace(/language-/, '') : null

  if (live) {
    return (
      <BorderBox mb={3} css={{overflow: 'hidden'}}>
        <LiveProvider code={children.trim()}>
          <Box as={LivePreview} p={3} />
          <Relative>
            <LiveEditor theme={theme} />
            <Absolute top={8} right={8}>
              <ClipboardCopy value={children} />
            </Absolute>
          </Relative>
          <Text
            as={LiveError}
            m={0}
            p={3}
            fontFamily="mono"
            fontSize={1}
            color="white"
            bg="red.6"
          />
        </LiveProvider>
      </BorderBox>
    )
  }

  return (
    <Relative>
      <Absolute top={8} right={8}>
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
