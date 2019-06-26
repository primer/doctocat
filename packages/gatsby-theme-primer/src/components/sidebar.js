import {Flex} from '@primer/components'
import {graphql, Link, useStaticQuery} from 'gatsby'
import React from 'react'

function Sidebar() {
  const data = useStaticQuery(graphql`
    {
      allNavYaml {
        nodes {
          id
          title
          path
          pages {
            title
            path
          }
        }
      }
    }
  `)

  return (
    <Flex flexDirection="column" p={4}>
      {data.allNavYaml.nodes.map(node => (
        <React.Fragment key={node.id}>
          <Link to={node.path} py={1}>
            {node.title}
          </Link>
          {node.pages ? (
            <Flex flexDirection="column" pl={3}>
              {node.pages.map(page => (
                <Link key={page.title} to={page.path} py={1}>
                  {page.title}
                </Link>
              ))}
            </Flex>
          ) : null}
        </React.Fragment>
      ))}
    </Flex>
  )
}

export default Sidebar
