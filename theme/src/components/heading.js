import {Heading, Link, StyledOcticon} from '@primer/react'
import {LinkIcon} from '@primer/octicons-react'
import themeGet from '@styled-system/theme-get'
import GithubSlugger from 'github-slugger'
import React from 'react'
import textContent from 'react-addons-text-content'
import styled from 'styled-components'
import {HEADER_HEIGHT} from './header'

const StyledHeading = styled(Heading)`
  margin-top: ${themeGet('space.4')};
  margin-bottom: ${themeGet('space.3')};
  scroll-margin-top: ${HEADER_HEIGHT + 24}px;
  line-height: ${themeGet('lineHeights.condensed')};

  @media (hover: hover) {
    & .octicon-link {
      visibility: hidden;
    }

    &:hover .octicon-link,
    &:focus-within .octicon-link {
      visibility: visible;
    }
  }
`

function MarkdownHeading({children, ...props}) {
  const slugger = new GithubSlugger()
  const text = children ? textContent(children) : ''
  const id = text ? slugger.slug(text) : ''

  return (
    <StyledHeading id={id} {...props}>
      <Link
        href={`#${id}`}
        sx={{
          color: 'inherit',
          '&:hover, &:focus': {
            textDecoration: 'none'
          }
        }}
      >
        {children}
        <StyledOcticon
          icon={LinkIcon}
          className="octicon-link"
          sx={{
            ml: 2,
            color: 'fg.muted',
            // !important is needed here to override default icon styles
            verticalAlign: 'middle !important'
          }}
        />
      </Link>
    </StyledHeading>
  )
}

const StyledH1 = styled(StyledHeading).attrs({as: 'h1'})`
  padding-bottom: ${themeGet('space.2')};
  font-size: ${themeGet('fontSizes.7')};
  border-bottom: 1px solid ${themeGet('colors.border.default')};
`

const StyledH2 = styled(StyledHeading).attrs({as: 'h2'})`
  padding-bottom: ${themeGet('space.2')};
  font-size: ${themeGet('fontSizes.4')};
  border-bottom: 1px solid ${themeGet('colors.border.default')};
  font-weight: ${themeGet('fontWeights.semibold')};
`

const StyledH3 = styled(StyledHeading).attrs({as: 'h3'})`
  font-size: ${themeGet('fontSizes.3')};
  font-weight: ${themeGet('fontWeights.semibold')};
`

const StyledH4 = styled(StyledHeading).attrs({as: 'h4'})`
  font-size: ${themeGet('fontSizes.2')};
  font-weight: ${themeGet('fontWeights.semibold')};
`

const StyledH5 = styled(StyledHeading).attrs({as: 'h5'})`
  font-size: ${themeGet('fontSizes.1')};
`

const StyledH6 = styled(StyledHeading).attrs({as: 'h6'})`
  font-size: ${themeGet('fontSizes.1')};
  color: ${themeGet('colors.fg.muted')};
`

export const H1 = props => <MarkdownHeading as={StyledH1} {...props} />
export const H2 = props => <MarkdownHeading as={StyledH2} {...props} />
export const H3 = props => <MarkdownHeading as={StyledH3} {...props} />
export const H4 = props => <MarkdownHeading as={StyledH4} {...props} />
export const H5 = props => <MarkdownHeading as={StyledH5} {...props} />
export const H6 = props => <MarkdownHeading as={StyledH6} {...props} />
