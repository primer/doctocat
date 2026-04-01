import componentMetadata from '@primer/component-metadata'
import {Breadcrumbs, Heading} from '@primer/react'
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
import navItems from '../nav.yml'
import {withPrefix} from 'gatsby'

const getPageAncestry = (url, object) => {
  const result = []
  const buildArray = (node, path) => {
    if (node.url === path) {
      result.push({title: node.title, url: node.url})
    } else if (node.children) {
      for (const child of node.children) {
        buildArray(child, path)
        if (result.length > 0) {
          result.unshift({title: node.title, url: node.url})
          break
        }
      }
    }
  }
  for (const node of object) {
    buildArray(node, url)
    if (result.length > 0) {
      break
    }
  }
  return result
}

function Layout({children, pageContext, path}) {
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
    componentId,
  } = pageContext.frontmatter

  if (!additionalContributors) {
    additionalContributors = []
  }

  const component = componentMetadata.components[componentId]

  // Auto-populate title and description using component metadata
  if (component) {
    title ||= component.displayName
    description ||= component.description
  }
  const breadcrumbData = getPageAncestry(path, navItems).filter(item => item.url)

  return (
    <div style={{flexDirection: 'column', minHeight: '100vh', display: 'flex'}}>
      <Head title={title} description={description} />
      <Header path={path} />
      <div style={{flex: '1 1 auto', flexDirection: 'row', display: 'flex', zIndex: 0}}>
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div
          style={{
            justifyContent: 'center',
            flexDirection: 'row-reverse',
            display: 'flex',
            maxWidth: '1200px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            // className="layout-padding": add CSS for responsive padding (24px mobile → 48px desktop)
            padding: 48,
          }}
        >
          {pageContext.tableOfContents.items ? (
            <div
              className="toc-sidebar"
              style={{
                width: 220,
                flex: '0 0 auto',
                marginLeft: 80,
                position: 'sticky',
                top: HEADER_HEIGHT + 48,
                maxHeight: `calc(100vh - ${HEADER_HEIGHT}px - 48px)`,
                gridArea: 'table-of-contents',
                overflow: 'auto',
              }}
            >
              <Heading
                as="h3"
                style={{fontSize: 14, display: 'inline-block', fontWeight: 'bold', paddingLeft: 16}}
                id="toc-heading"
              >
                On this page
              </Heading>
              <TableOfContents aria-labelledby="toc-heading" items={pageContext.tableOfContents.items} />
            </div>
          ) : null}
          <div style={{width: '100%', maxWidth: '960px', minWidth: 0}}>
            <main id="skip-nav" style={{marginBottom: 24}}>
              {breadcrumbData.length > 1 ? (
                <Breadcrumbs style={{marginBottom: 24}}>
                  {breadcrumbData.map(item => (
                    <Breadcrumbs.Item key={item.url} href={withPrefix(item.url)} selected={path === item.url}>
                      {item.title}
                    </Breadcrumbs.Item>
                  ))}
                </Breadcrumbs>
              ) : null}
              <Heading as="h1" style={{fontSize: 48}}>
                {title}
              </Heading>
              {description ? <div style={{fontSize: 20, marginBottom: 16}}>{description}</div> : null}
              {status || source || storybook || lookbook || figma || rails || react ? (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    columnGap: 16,
                    marginBottom: 48,
                    marginTop: 8,
                    rowGap: 16,
                    alignItems: 'center',
                    fontSize: 14,
                  }}
                >
                  {status ? (
                    <ul
                      style={{
                        display: 'flex',
                        gap: 4,
                        alignItems: 'center',
                        margin: 0,
                        padding: 0,
                        paddingInline: 0,
                        listStyle: 'none',
                      }}
                    >
                      <li>
                        <StatusLabel status={status} />
                      </li>
                      <li>
                        <AccessibilityLabel a11yReviewed={a11yReviewed} />
                      </li>
                    </ul>
                  ) : null}
                  {source || storybook || lookbook || figma || rails || react ? (
                    <ul
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 24,
                        alignItems: 'center',
                        margin: 0,
                        padding: 0,
                        paddingInline: 0,
                        listStyle: 'none',
                      }}
                    >
                      {source ? <SourceLink href={source} /> : null}
                      {lookbook ? <LookbookLink href={lookbook} /> : null}
                      {storybook ? <StorybookLink href={storybook} /> : null}
                      {react ? <ReactLink href={react} /> : null}
                      {rails ? <RailsLink href={rails} /> : null}
                      {figma ? <FigmaLink href={figma} /> : null}
                    </ul>
                  ) : null}
                </div>
              ) : null}
            </main>
            {pageContext.tableOfContents.items ? (
              <div
                className="mobile-toc"
                style={{
                  marginBottom: 32,
                  border: '1px solid var(--borderColor-muted, var(--color-border-muted))',
                  backgroundColor: 'var(--bgColor-muted, var(--color-canvas-subtle))',
                  borderRadius: 6,
                }}
              >
                <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8}}>
                  <div
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <span style={{fontWeight: 'bold'}}>On this page</span>
                  </div>
                </div>
                <div style={{borderTop: '1px solid var(--borderColor-muted, var(--color-border-muted))'}}>
                  <TableOfContents items={pageContext.tableOfContents.items} />
                </div>
              </div>
            ) : null}
            {children}
            <PageFooter
              editUrl={pageContext.editUrl}
              contributors={pageContext.contributors.concat(additionalContributors.map(login => ({login})))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
