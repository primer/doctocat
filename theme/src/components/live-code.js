import {Absolute, BorderBox, Flex, Relative, Text} from '@primer/components'
import HtmlToJsx from 'html-2-jsx'
import githubTheme from 'prism-react-renderer/themes/github'
import React from 'react'
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'
import {ThemeContext} from 'styled-components'
import scope from '../live-code-scope'
import ClipboardCopy from './clipboard-copy'
import Frame from './frame'
import LivePreviewWrapper from './live-preview-wrapper'

const htmlToJsxConverter = new HtmlToJsx({
  createClass: false,
})

const wrapWithFragment = code => `<React.Fragment>${code}</React.Fragment>`

const languageTransformers = {
  html: html => wrapWithFragment(htmlToJsxConverter.convert(html)),
  jsx: jsx => wrapWithFragment(jsx),
}

function LiveCode({code, language}) {
  const theme = React.useContext(ThemeContext)

  return (
    <BorderBox
      as={Flex}
      flexDirection="column"
      mb={3}
      css={{overflow: 'hidden'}}
    >
      <LiveProvider
        scope={scope}
        code={code}
        transformCode={languageTransformers[language]}
      >
        <Frame>
          <LivePreviewWrapper>
            <LivePreview />
          </LivePreviewWrapper>
        </Frame>
        <Relative>
          <LiveEditor
            theme={githubTheme}
            ignoreTabKey={true}
            padding={theme.space[3]}
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: '85%',
            }}
          />
          <Absolute top={0} right={0} p={2}>
            <ClipboardCopy value={code} />
          </Absolute>
        </Relative>
        <Text
          as={LiveError}
          m={0}
          p={3}
          fontFamily="mono"
          fontSize={1}
          color="white"
          bg="red.5"
        />
      </LiveProvider>
    </BorderBox>
  )
}

export default LiveCode
