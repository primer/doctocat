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

const languageTransformers = {
  html: html => htmlToJsx(html),
  jsx: jsx => wrapWithFragment(jsx)
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

function LiveCode({code, language, noinline, metastring}) {
  const theme = React.useContext(ThemeContext)
  const [liveCode, setLiveCode] = useState(code)
  const handleChange = updatedLiveCode => setLiveCode(updatedLiveCode)

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
            display: 'flex'
          }}
        >
          <LivePreviewWrapper>
            <LivePreview />
          </LivePreviewWrapper>
        </Box>
        <Box sx={{position: 'relative'}}>
          <LiveEditor
            onChange={handleChange}
            theme={githubTheme}
            ignoreTabKey={true}
            padding={theme.space[3]}
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: '85%',
              borderBottomLeftRadius: theme.radii[2],
              borderBottomRightRadius: theme.radii[2],
              border: '1px solid',
              borderTop: 0,
              borderColor: theme.colors.border.default
            }}
          />
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
