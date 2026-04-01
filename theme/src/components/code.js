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
    <div
      style={{
        // Make <pre> adjust to the width of the container
        // https://stackoverflow.com/a/14406386
        display: 'table',
        tableLayout: 'fixed',
        width: '100%',
        position: 'relative',
      }}
    >
      <div style={{top: 0, right: 0, padding: 8, position: 'absolute'}}>
        <ClipboardCopy value={code} />
      </div>
      <Highlight {...defaultProps} Prism={Prism} code={code} language={language} theme={githubTheme}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <pre
            className={className}
            style={{
              ...style,
              overflow: 'auto',
              borderRadius: 6,
              marginTop: 0,
              marginBottom: 16,
              padding: 16,
              border: 0,
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} style={{fontFamily: 'monospace', fontSize: 14}} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default Code
