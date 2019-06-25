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
          href
          items {
            title
            href
          }
        }
      }
    }
  `)

  return (
    <Flex flexDirection="column" width="100%" height="100%" p={4} bg="gray.1">
      {data.allNavYaml.nodes.map(node => (
        <React.Fragment key={node.id}>
          <Link as={GatsbyLink} to={node.href} py={1}>
            {node.title}
          </Link>
          {node.items ? (
            <Flex flexDirection="column" pl={3}>
              {node.items.map(item => (
                <Link key={item.title} as={GatsbyLink} to={item.href} py={1}>
                  {item.title}
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
