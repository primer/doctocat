import {Absolute, BorderBox, Relative, Text} from '@primer/components'
import githubTheme from 'prism-react-renderer/themes/github'
import React from 'react'
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'
import {ThemeContext} from 'styled-components'
import scope from '../live-code-scope'
import ClipboardCopy from './clipboard-copy'
import Frame from './frame'
import LivePreviewWrapper from './live-preview-wrapper'

function LiveCode({code}) {
  const theme = React.useContext(ThemeContext)

  return (
    <BorderBox mb={3} css={{overflow: 'hidden'}}>
      <LiveProvider scope={scope} code={code}>
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
