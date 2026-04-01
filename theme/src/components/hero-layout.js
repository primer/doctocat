import React from 'react'
import Container from './container'
import Head from './head'
import Header from './header'
import Hero from './hero'
import PageFooter from './page-footer'
import Sidebar from './sidebar'

function HeroLayout({children, pageContext}) {
  let {additionalContributors} = pageContext.frontmatter

  if (!additionalContributors) {
    additionalContributors = []
  }

  return (
    <div style={{flexDirection: 'column', minHeight: '100vh', display: 'flex'}}>
      <Head />
      <Header />
      <div style={{flex: '1 1 auto', flexDirection: 'row', display: 'flex'}}>
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <main id="skip-nav" style={{width: '100%'}}>
          <Hero />
          <Container>
            {children}
            <PageFooter
              editUrl={pageContext.editUrl}
              contributors={pageContext.contributors.concat(additionalContributors.map(login => ({login})))}
            />
          </Container>
        </main>
      </div>
    </div>
  )
}

export default HeroLayout
