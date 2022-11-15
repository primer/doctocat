import componentMetadata from '@primer/component-metadata'
import {Box, Heading, Text} from '@primer/react'
import React from 'react'
import Head from './head'
import Header, {HEADER_HEIGHT} from './header'
import PageFooter from './page-footer'
import Sidebar from './sidebar'
import SourceLink from './source-link'
import RailsLink from './rails-link'
import ReactLink from './react-link'
import StatusLabel from './status-label'
import AccessibilityLabel from './accessibility-label'
import LookbookLink from './lookbook-link'
import StorybookLink from './storybook-link'
import FigmaLink from './figma-link'
import TableOfContents from './table-of-contents'
import useSiteMetadata from '../use-site-metadata'

const reactStoriesBaseURL = '/react/storybook?path=/story/'

function Layout({children, pageContext}) {
  let {
    title,
    description,
    figma,
    react,
    status,
    a11yReviewed,
    source,
    rails,
    storybook,
    lookbook,
    additionalContributors,
    componentId
  } = pageContext.frontmatter

  const [storybookData, setStorybookData] = React.useState({})
  const siteMetadata = useSiteMetadata()

  if (!additionalContributors) {
    additionalContributors = []
  }

  React.useEffect(() => {
    // Fetch storybook data only when React docs are being rendered, if there's a componentID, and when no storybook data is present
    if (siteMetadata.shortName === 'React' && componentId && !storybook) {
      getStoriesData()
        .then(data => setStorybookData(data))
        .catch(error => console.error(error))
    }
  }, [siteMetadata.shortName, componentId, storybook])

  const component = componentMetadata.components[componentId]

  // Auto-populate title and description using component metadata
  if (component) {
    title ||= component.displayName
    description ||= component.description
  }

  const componentIdFormatted = componentId?.replace(/_/g, '')
  const storybookReactURL = Object.values(storybookData).find(story => {
    if (status === 'Deprecated') {
      return story.id.includes('deprecated-') && story.id.includes('-' + componentIdFormatted + '--default')
    } else {
      return story.id.includes('-' + componentIdFormatted + '--default')
    }
  })

  // Auto-populate storybook using stories.json metadata
  if (storybookReactURL) {
    storybook ||= reactStoriesBaseURL + storybookReactURL.id
  }

  return (
    <Box sx={{flexDirection: 'column', minHeight: '100vh', display: 'flex'}}>
      <Head title={title} description={description} />
      <Header />
      <Box css={{zIndex: 0}} sx={{flex: '1 1 auto', flexDirection: 'row', display: 'flex'}}>
        <Box sx={{display: ['none', null, null, 'block']}}>
          <Sidebar />
        </Box>
        <Box
          id="skip-nav"
          sx={{
            justifyContent: 'center',
            flexDirection: 'row-reverse',
            display: 'flex',
            width: '100%',
            p: [4, 5, 6, 7]
          }}
        >
          {pageContext.tableOfContents.items ? (
            <Box
              sx={{
                width: 220,
                flex: '0 0 auto',
                marginLeft: 6,
                display: ['none', null, 'block'],
                position: 'sticky',
                top: HEADER_HEIGHT + 48,
                maxHeight: `calc(100vh - ${HEADER_HEIGHT}px - 48px)`
              }}
              css={{gridArea: 'table-of-contents', overflow: 'auto'}}
            >
              <Text sx={{display: 'inline-block', fontWeight: 'bold', pl: 3}} id="toc-heading">
                On this page
              </Text>
              <TableOfContents aria-labelledby="toc-heading" items={pageContext.tableOfContents.items} />
            </Box>
          ) : null}
          <Box sx={{width: '100%', maxWidth: '960px'}}>
            <Box sx={{mb: 4}}>
              <Box sx={{alignItems: 'center', display: 'flex'}}>
                <Heading as="h1">{title}</Heading>{' '}
              </Box>
              {description ? <Box sx={{fontSize: 3, mb: 3}}>{description}</Box> : null}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  columnGap: 3,
                  mb: 7,
                  mt: 2,
                  rowGap: 3,
                  alignItems: 'center',
                  fontSize: 1
                }}
              >
                {status ? (
                  <Box
                    as={'ul'}
                    sx={{
                      display: 'flex',
                      gap: 1,
                      alignItems: 'center',
                      m: 0,
                      p: 0,
                      paddingInline: 0,
                      listStyle: 'none'
                    }}
                  >
                    <li>
                      <StatusLabel status={status} />
                    </li>
                    <li>
                      <AccessibilityLabel a11yReviewed={a11yReviewed} />
                    </li>
                  </Box>
                ) : null}
                {source || storybook || lookbook || figma || rails || react ? (
                  <Box
                    as={'ul'}
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 4,
                      alignItems: 'center',
                      m: 0,
                      p: 0,
                      paddingInline: 0,
                      listStyle: 'none'
                    }}
                  >
                    {source ? <SourceLink href={source} /> : null}
                    {lookbook ? <LookbookLink href={lookbook} /> : null}
                    {storybook ? <StorybookLink href={storybook} /> : null}
                    {react ? <ReactLink href={react} /> : null}
                    {rails ? <RailsLink href={rails} /> : null}
                    {figma ? <FigmaLink href={figma} /> : null}
                  </Box>
                ) : null}
              </Box>
            </Box>
            {pageContext.tableOfContents.items ? (
              <Box
                sx={{
                  display: ['block', null, 'none'],
                  mb: 5,
                  borderColor: 'border.muted',
                  bg: 'canvas.subtle',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderRadius: 2
                }}
              >
                <Box sx={{px: 3, py: 2}}>
                  <Box
                    sx={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}
                  >
                    <Text sx={{fontWeight: 'bold'}}>On this page</Text>
                  </Box>
                </Box>
                <Box sx={{borderTop: '1px solid', borderColor: 'border.muted'}}>
                  <TableOfContents items={pageContext.tableOfContents.items} />
                </Box>
              </Box>
            ) : null}
            {children}
            <PageFooter
              editUrl={pageContext.editUrl}
              contributors={pageContext.contributors.concat(additionalContributors.map(login => ({login})))}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Layout

async function getStoriesData() {
  const handleError = error => {
    console.error(error)
  }

  const storiesData = await fetch('https://primer.style/react/storybook/stories.json')
    .then(res => res.json())
    .catch(handleError)

  return storiesData.stories
}
