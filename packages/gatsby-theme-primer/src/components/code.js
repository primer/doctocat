import {Absolute, BorderBox, Relative, Text} from '@primer/components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import githubTheme from 'prism-react-renderer/themes/github'
import React from 'react'
import ClipboardCopy from './clipboard-copy'
import LiveCode from './live-code'

function Code({className, children, live}) {
  const language = getLanguage(className)
  const code = children.trim()

  if (live) {
    return <LiveCode code={code} />
  }

  return (
    <Relative>
      <Absolute top={0} right={0} p={2}>
        <ClipboardCopy value={code} />
      </Absolute>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={githubTheme}
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

function getLanguage(className) {
  if (!className) {
    return null
  }

  const languageRegExp = new RegExp(/language-/)
  const classNames = className.split(' ')

  for (let i = 0; i < classNames.length; i++) {
    if (languageRegExp.test(classNames[i])) {
      return classNames[i].replace(languageRegExp, '')
    }
  }

  return null
}

export default Code
