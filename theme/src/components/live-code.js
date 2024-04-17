import {Box, Text} from '@primer/react'
import htmlReactParser from 'html-react-parser'
import githubTheme from '../github'
import React, {useState} from 'react'
import reactElementToJsxString from 'react-element-to-jsx-string'
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'
import {ThemeContext} from 'styled-components'
import scope from '../live-code-scope'
import ClipboardCopy from './clipboard-copy'
import LivePreviewWrapper from './live-preview-wrapper'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

const languageTransformers = {
  html: html => htmlToJsx(html),
  jsx: jsx => wrapWithFragment(jsx),
}

function htmlToJsx(html) {
  try {
    const reactElement = htmlReactParser(removeNewlines(html))
    // The output of htmlReactParser could be a single React element
    // or an array of React elements. reactElementToJsxString does not accept arrays
    // so we have to wrap the output in React fragment.
    return reactElementToJsxString(<>{reactElement}</>)
  } catch (error) {
    return wrapWithFragment(html)
  }
}

function removeNewlines(string) {
  return string.replace(/(\r\n|\n|\r)/gm, '')
}

function wrapWithFragment(jsx) {
  return `<React.Fragment>${jsx}</React.Fragment>`
}

const getResolvedScope = metastring => {
  if (typeof scope === 'function') return scope(metastring)
  return scope
}

function parseHighlightRange(highlight) {
  // Captures numbers separated by a dash: 2-3, 34-5, 2-101
  const numbersWithDash = new RegExp('([0-9]+)-([0-9]+)')

  const match = numbersWithDash.exec(highlight)
  if (!match) return null

  return {firstLine: match[1], lastLine: match[2]}
}

const LineWrapper = styled.div`
  // Using negative and positive nth-child values to select the children.
  pre .token-line:nth-child(n + ${props => props.range.firstLine}):nth-child(-n + ${props => props.range.lastLine}) {
    // 16px is the padding of the react-live <pre> element that wraps the .token-line elements.
    // The margin/padding combo extends the token-line elements so the background color reaches the border.
    margin: 0px -16px;
    padding: 0px 16px;
    background-color: ${themeGet('colors.accent.subtle')};
    // We use box-shadow instead of a border to avoid flickering when toggling the highlighting on/off.
    box-shadow: inset 3px 0px 0px 0px ${themeGet('colors.accent.fg')};
  }
`

function LineHighlighter({enabled, range, children}) {
  if (!enabled || !range) return children

  return <LineWrapper range={range}>{children}</LineWrapper>
}

function LiveCode({code, language, highlight, noinline, metastring}) {
  const theme = React.useContext(ThemeContext)
  const [liveCode, setLiveCode] = useState(code)
  const [pristine, setPristine] = useState(true)
  const handleChange = updatedLiveCode => {
    setLiveCode(updatedLiveCode)
    setPristine(false)
  }

  return (
    <Box sx={{flexDirection: 'column', mb: 3, display: 'flex'}}>
      <LiveProvider
        scope={getResolvedScope(metastring)}
        code={liveCode}
        transformCode={languageTransformers[language]}
        noInline={noinline}
      >
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'border.default',
            borderTopRightRadius: 2,
            borderTopLeftRadius: 2,
            display: 'flex',
          }}
        >
          <LivePreviewWrapper>
            <LivePreview />
          </LivePreviewWrapper>
        </Box>
        <Box sx={{position: 'relative'}}>
          <LineHighlighter range={parseHighlightRange(highlight)} enabled={pristine}>
            <LiveEditor
              onChange={handleChange}
              theme={githubTheme}
              ignoreTabKey={true}
              padding={theme?.space[3]}
              style={{
                fontFamily: theme?.fonts.mono,
                fontSize: '85%',
                borderBottomLeftRadius: theme?.radii[2],
                borderBottomRightRadius: theme?.radii[2],
                border: '1px solid',
                borderTop: 0,
                borderColor: theme?.colors.border.default,
              }}
            />
          </LineHighlighter>
          <Box sx={{top: 0, right: 0, p: 2, position: 'absolute'}}>
            <ClipboardCopy value={liveCode} />
          </Box>
        </Box>
        <Text
          as={LiveError}
          sx={{m: 0, p: 3, fontFamily: 'mono', fontSize: 1, color: 'fg.onEmphasis', bg: 'danger.emphasis'}}
        />
      </LiveProvider>
    </Box>
  )
}

export default LiveCode
