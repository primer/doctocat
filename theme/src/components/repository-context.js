import {graphql, useStaticQuery} from 'gatsby'
import React from 'react'

const RepositoryContext = React.createContext({url: ''})

export function RepositoryProvider({children}) {
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

export default RepositoryContext
