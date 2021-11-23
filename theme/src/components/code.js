import {Absolute, Box, Relative, Text} from '@primer/components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import Prism from '../prism'
import githubTheme from '../github'
import React from 'react'
import ClipboardCopy from './clipboard-copy'
import LiveCode from './live-code'

function Code({className, children, live, noinline, metastring}) {
  const language = className ? className.replace(/language-/, '') : ''
  const code = children.trim()
  const shouldHighlight = calculateLinesToHighlight(metastring)
  const {title} = extractProperties(metastring)

  if (live) {
    return <LiveCode code={code} language={language} noinline={noinline} title={title} />
  }

  return (
    <Relative
      mb={3}
      sx={{
        // Make <pre> adjust to the width of the container
        // https://stackoverflow.com/a/14406386
        display: 'table',
        tableLayout: 'fixed',
        width: '100%',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'border.default'
      }}
    >
      {title ? (
        <Box
          p={3}
          sx={{
            borderBottom: '1px solid',
            borderColor: 'border.default'
          }}
        >
          {title}
        </Box>
      ) : null}
      <Relative>
        <Absolute sx={{top: 0, right: 0, p: 2}}>
          <ClipboardCopy value={code} />
        </Absolute>
        <Highlight {...defaultProps} Prism={Prism} code={code} language={language} theme={githubTheme}>
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <Box
              as="pre"
              className={className}
              m={0}
              pt={3}
              pb={3}
              border={0}
              style={{...style, overflow: 'auto'}}
              sx={{borderRadius: 2}}
            >
              {tokens.map((line, i) => (
                <Box
                  key={i}
                  {...getLineProps({line, key: i})}
                  pr={3}
                  pl={3}
                  bg={shouldHighlight(i) ? 'attention.subtle' : undefined}
                >
                  {line.map((token, key) => (
                    <Text key={key} fontFamily="mono" fontSize={1} {...getTokenProps({token, key})} />
                  ))}
                </Box>
              ))}
            </Box>
          )}
        </Highlight>
      </Relative>
    </Relative>
  )
}

function rangeParser(string) {
  const numberRegex = /^-?\d+$/
  const rangeRegex = /^(\d+)(-|\.\.\.?)(\d+)$/

  return string.split(',').reduce((acc, str) => {
    if (numberRegex.test(str)) {
      return [...acc, parseInt(str, 10)]
    } else if (rangeRegex.test(str)) {
      const match = str.match(rangeRegex)
      const start = parseInt(match[1], 10)
      const separator = match[2]
      const inclusive = separator === '...' ? 0 : 1
      const end = parseInt(match[3], 10) + inclusive

      if (start && end) {
        const range = Array(end - start)
          .fill()
          .map((_, idx) => start + idx)
        return [...acc, ...range]
      } else {
        return acc
      }
    } else {
      return acc
    }
  }, [])
}

const calculateLinesToHighlight = metastring => {
  const regex = /{([\d.,-]+)}/
  if (!regex.test(metastring)) {
    return () => false
  }

  const strlineNumbers = regex.exec(metastring)[1]
  const lineNumbers = rangeParser(strlineNumbers)
  return index => lineNumbers.includes(index + 1)
}

const extractProperties = metastring => {
  const regex = /(\w+)=["']([^"']+)["']/g
  const results = metastring ? metastring.matchAll(regex) : []

  return Array.from(results).reduce((acc, [, key, value]) => {
    return {...acc, [key]: value}
  }, {})
}

export default Code
