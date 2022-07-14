import {Box, Text} from '@primer/react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import React from 'react'
import githubTheme from '../github'
import Prism from '../prism'
import ClipboardCopy from './clipboard-copy'
import LiveCode from './live-code'

function Code({className, children, live, highlight, noinline, metastring}) {
  const language = className ? className.replace(/language-/, '') : ''
  const code = children.trim()

  if (live) {
    return (
      <LiveCode code={code} highlight={highlight} language={language} noinline={noinline} metastring={metastring} />
    )
  }

  return (
    <Box
      sx={{
        // Make <pre> adjust to the width of the container
        // https://stackoverflow.com/a/14406386
        display: 'table',
        tableLayout: 'fixed',
        width: '100%',
        position: 'relative'
      }}
    >
      <Box sx={{top: 0, right: 0, p: 2, position: 'absolute'}}>
        <ClipboardCopy value={code} />
      </Box>
      <Highlight {...defaultProps} Prism={Prism} code={code} language={language} theme={githubTheme}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <Box
            as="pre"
            className={className}
            style={{...style, overflow: 'auto'}}
            sx={{borderRadius: 2, mt: 0, mb: 3, p: 3, border: 0}}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <Text key={key} {...getTokenProps({token, key})} sx={{fontFamily: 'mono', fontSize: 1}} />
                ))}
              </div>
            ))}
          </Box>
        )}
      </Highlight>
    </Box>
  )
}

export default Code
