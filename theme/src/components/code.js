import {Absolute, Box, Relative, Text} from '@primer/components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import Prism from '../prism'
import githubTheme from '../github'
import React from 'react'
import ClipboardCopy from './clipboard-copy'
import LiveCode from './live-code'

function Code({className, children, live, noinline}) {
  const language = className ? className.replace(/language-/, '') : ''
  const code = children.trim()

  if (live) {
    return <LiveCode code={code} language={language} noinline={noinline} />
  }

  return (
    <Relative
      sx={{
        // Make <pre> adjust to the width of the container
        // https://stackoverflow.com/a/14406386
        display: 'table',
        tableLayout: 'fixed',
        width: '100%'
      }}
    >
      <Absolute top={0} right={0} p={2}>
        <ClipboardCopy value={code} />
      </Absolute>
      <Highlight {...defaultProps} Prism={Prism} code={code} language={language} theme={githubTheme}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <Box
            as="pre"
            className={className}
            mt={0}
            mb={3}
            p={3}
            border={0}
            style={{...style, overflow: 'auto'}}
            sx={{borderRadius: 2}}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <Text key={key} fontFamily="mono" fontSize={1} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </Box>
        )}
      </Highlight>
    </Relative>
  )
}

export default Code
