import type {Meta} from '@storybook/react'
import React from 'react'
import {Code} from '../Code'

const meta = {
  title: 'Components/Code',
  component: Code,
} satisfies Meta<typeof Code>

export default meta

export const Default = () => <Code>Hello</Code>
