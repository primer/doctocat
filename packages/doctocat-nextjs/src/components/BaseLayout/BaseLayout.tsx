import React from 'react'

interface BaseLayoutProps extends React.PropsWithChildren {}

function BaseLayout({children}: BaseLayoutProps) {
  return children
}

export {BaseLayout}
export type {BaseLayoutProps}
