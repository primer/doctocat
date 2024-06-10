import type {MDXComponents} from 'mdx/types'
import Image, {type ImageProps} from 'next/image'

const defaultComponents = {
  img: props => {
    if (typeof props.src === 'object') {
      return <Image {...(props as ImageProps)} />
    }
    return <img {...props} />
  },
} satisfies MDXComponents

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
  }
}
