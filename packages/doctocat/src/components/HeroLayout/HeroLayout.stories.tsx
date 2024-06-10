import type {Meta} from '@storybook/react'
import React from 'react'
import {HeroLayout} from '../HeroLayout'

const meta = {
  title: 'Components/HeroLayout',
  component: HeroLayout,
} satisfies Meta<typeof HeroLayout>

export default meta

export const Default = () => <HeroLayout>Hello</HeroLayout>
