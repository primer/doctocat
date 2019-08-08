import {Heading, Link, StyledOcticon} from '@primer/components'
import {Link as LinkIcon} from '@primer/octicons-react'
import themeGet from '@styled-system/theme-get'
import GithubSlugger from 'github-slugger'
import React from 'react'
import textContent from 'react-addons-text-content'
import styled from 'styled-components'

const StyledHeading = styled(Heading)`
  margin-top: ${themeGet('space.4')}px;
  margin-bottom: ${themeGet('space.3')}px;

  & .octicon-link {
    visibility: hidden;
  }

  &:hover .octicon-link,
  &:focus-within .octicon-link {
    visibility: visible;
  }
`

function MarkdownHeading({children, ...props}) {
  const slugger = new GithubSlugger()
  const id = children ? slugger.slug(textContent(children)) : ''

  return (
    <StyledHeading id={id} {...props}>
      <Link href={`#${id}`} p={2} ml={-32} color="gray.8">
        <StyledOcticon
          className="octicon-link"
          icon={LinkIcon}
          verticalAlign="middle"
        />
      </Link>
      {children}
    </StyledHeading>
  )
}

const StyledH1 = styled(StyledHeading).attrs({as: 'h1'})`
  padding-bottom: ${themeGet('space.1')}px;
  font-size: ${themeGet('fontSizes.5')}px;
  border-bottom: 1px solid ${themeGet('colors.gray.2')};
`

const StyledH2 = styled(StyledHeading).attrs({as: 'h2'})`
  padding-bottom: ${themeGet('space.1')}px;
  font-size: ${themeGet('fontSizes.4')}px;
  border-bottom: 1px solid ${themeGet('colors.gray.2')};
`

const StyledH3 = styled(StyledHeading).attrs({as: 'h3'})`
  font-size: ${themeGet('fontSizes.3')}px;
`

const StyledH4 = styled(StyledHeading).attrs({as: 'h4'})`
  font-size: ${themeGet('fontSizes.2')}px;
`

const StyledH5 = styled(StyledHeading).attrs({as: 'h5'})`
  font-size: ${themeGet('fontSizes.1')}px;
`

const StyledH6 = styled(StyledHeading).attrs({as: 'h6'})`
  font-size: ${themeGet('fontSizes.1')}px;
  color: ${themeGet('colors.gray.5')};
`

export const H1 = props => <MarkdownHeading as={StyledH1} {...props} />
export const H2 = props => <MarkdownHeading as={StyledH2} {...props} />
export const H3 = props => <MarkdownHeading as={StyledH3} {...props} />
export const H4 = props => <MarkdownHeading as={StyledH4} {...props} />
export const H5 = props => <MarkdownHeading as={StyledH5} {...props} />
export const H6 = props => <MarkdownHeading as={StyledH6} {...props} />
