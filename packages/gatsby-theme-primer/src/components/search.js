import React from 'react'
import {TextInput} from '@primer/components'
import {useStaticQuery} from 'gatsby'
import lunr from 'lunr'

function Search() {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            title
          }
          rawBody
        }
      }
    }
  `)

  const lunrIndex = lunr(function() {
    this.ref('title')
    this.field('rawBody')
    data.allMdx.nodes.forEach(node => {
      this.add({title: node.frontmatter.title, rawBody: node.rawBody})
    })
  })

  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    console.log(lunrIndex.search(query))
  }, [query])

  return (
    <TextInput
      type="search"
      placeholder="Search"
      value={query}
      onChange={event => setQuery(event.target.value)}
    />
  )
}

export default Search
