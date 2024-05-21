import React from 'react'
import classes from './Code.module.css'

interface CodeProps {}

function Code({}: CodeProps) {
  return <div className={classes.container}>Code</div>
}

export {Code}
export type {CodeProps}
