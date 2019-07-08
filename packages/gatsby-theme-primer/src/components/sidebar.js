import {Flex, Link} from '@primer/components'
import {graphql, Link as GatsbyLink, useStaticQuery} from 'gatsby'
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
    <Flex flexDirection="column" minWidth={240} p={4} bg="gray.1">
      {data.allNavYaml.nodes.map(node => (
        <React.Fragment key={node.id}>
          <Link as={GatsbyLink} to={node.path} py={1}>
            {node.title}
          </Link>
          {node.pages ? (
            <Flex flexDirection="column" pl={3}>
              {node.pages.map(page => (
                <Link key={page.title} as={GatsbyLink} to={page.path} py={1}>
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
