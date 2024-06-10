import {getPages, getPageBySlug} from '@primer/doctocat-content'
import path from 'node:path'
import process from 'node:process'

interface PageProps {
  params: {
    slug: Array<string>
  }
}

export default async function Page({params}: PageProps) {
  const directory = path.join(process.cwd(), 'content')
  const page = await getPageBySlug(directory, params.slug)
  const relativePath = path.relative(directory, page.filepath)
  const {default: MDXContent, frontmatter} = await import(`../../../content/${relativePath}`)

  return <MDXContent components={{}} />
}

export async function generateStaticParams(): Promise<Array<PageProps['params']>> {
  const directory = path.join(process.cwd(), 'content')
  const pages = await getPages(directory)
  return pages.map(page => {
    return {
      slug: page.getSlug(),
    }
  })
}
