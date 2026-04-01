import React from 'react'

function Container({children}) {
  return (
    <div style={{width: '100%', maxWidth: 960, padding: 32, marginLeft: 'auto', marginRight: 'auto'}}>{children}</div>
  )
}

export default Container
