'use client'

import React from 'react'

// const baseUrls = {
// react: 'https://primer.style/react/storybook',
// css: 'https://primer.style/css/storybook',
// rails: 'https://primer.style/view-components/lookbook/',
// } as const

interface StorybookEmbedProps {
  // framework?: 'css' | 'rails' | 'react'
  // baseUrl?: string
  // stories: Array<{id: string; code?: string}>
  // height?: string | number
  // hideFrame?: boolean
}

function StorybookEmbed(
  {
    // framework = 'react',
    // baseUrl = baseUrls[framework],
    // stories,
    // height = 250,
    // hideFrame = false,
  }: StorybookEmbedProps,
) {
  return <div>Example</div>
}

export {StorybookEmbed}
export type {StorybookEmbedProps}
