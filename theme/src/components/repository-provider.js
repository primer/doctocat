import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import RepositoryContext from '../repository-context'

function RepositoryProvider({children}) {
  const data = useStaticQuery(graphql`
    {
      repository {
        url
      }
    }
  `)

  return (
    <RepositoryContext.Provider value={data.repository}>
      {children}
    </RepositoryContext.Provider>
  )
}

export default RepositoryProvider
