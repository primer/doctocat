import {Grid} from '@primer/components'
import React from 'react'

function Columns({children}) {
  return (
    <Grid
      gridTemplateColumns={['100%', null, '50% 50%']}
      gridGap={7}
      maxWidth="100%"
    >
      {children}
    </Grid>
  )
}

export default Columns
