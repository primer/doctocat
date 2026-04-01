import React from 'react'

function ImageContainer({children}) {
  return (
    <div
      style={{
        padding: 40,
        backgroundColor: 'var(--bgColor-muted, var(--color-canvas-subtle))',
        border: '1px solid var(--borderColor-default, var(--color-border-default))',
        borderRadius: 6,
      }}
    >
      <div style={{justifyContent: 'center', display: 'flex'}}>{children}</div>
    </div>
  )
}

export default ImageContainer
