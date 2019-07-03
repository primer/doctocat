import {Heading} from '@primer/components'
import themeGet from '@styled-system/theme-get'
import styled from 'styled-components'

const StyledHeading = styled(Heading)`
  margin-top: ${themeGet('space.4')}px;
  margin-bottom: ${themeGet('space.3')}px;
`

export const H1 = styled(StyledHeading).attrs({as: 'h1'})`
  padding-bottom: ${themeGet('space.1')}px;
  font-size: ${themeGet('fontSizes.5')}px;
  border-bottom: 1px solid ${themeGet('colors.gray.2')};
`

export const H2 = styled(StyledHeading).attrs({as: 'h2'})`
  padding-bottom: ${themeGet('space.1')}px;
  font-size: ${themeGet('fontSizes.4')}px;
  border-bottom: 1px solid ${themeGet('colors.gray.2')};
`

export const H3 = styled(StyledHeading).attrs({as: 'h3'})`
  font-size: ${themeGet('fontSizes.3')}px;
`

export const H4 = styled(StyledHeading).attrs({as: 'h4'})`
  font-size: ${themeGet('fontSizes.2')}px;
`

export const H5 = styled(StyledHeading).attrs({as: 'h5'})`
  font-size: ${themeGet('fontSizes.1')}px;
`

export const H6 = styled(StyledHeading).attrs({as: 'h6'})`
  font-size: ${themeGet('fontSizes.1')}px;
  color: ${themeGet('colors.gray.5')};
`
