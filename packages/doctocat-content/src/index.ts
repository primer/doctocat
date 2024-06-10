import fs from 'node:fs/promises'
import {existsSync} from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

type Slug = Array<string>

class Page {
  filepath: string
  relativePath: string

  static create(filepath: string, relativePath: string) {
    return new Page(filepath, relativePath)
  }

  constructor(filepath: string, relativePath: string) {
    this.filepath = filepath
    this.relativePath = relativePath
  }

  getSlug(): Slug {
    const extension = path.extname(this.relativePath)
    const url = path.format({
      dir: path.dirname(this.relativePath),
      name: path.basename(this.relativePath, extension),
    })
    const segments = url.split('/')
    if (segments[segments.length - 1] === 'index') {
      segments.pop()
    }

    return segments
  }

  async getContents(): Promise<string> {
    return await fs.readFile(this.filepath, 'utf8')
  }

  async getFrontmatter(): Promise<Frontmatter> {
    const contents = await this.getContents()
    const {data} = matter(contents)
    return data
  }

  async getTitle(): Promise<string | null> {
    const frontmatter = await this.getFrontmatter()
    return frontmatter.title ?? null
  }

  async getDescription(): Promise<string | null> {
    const frontmatter = await this.getFrontmatter()
    return frontmatter.description ?? null
  }

  async getTags(): Promise<Array<string>> {
    const frontmatter = await this.getFrontmatter()
    return frontmatter.tags ?? []
  }

  async getLastModified() {
    const stats = await fs.stat(this.filepath)
    return new Date(stats.mtime)
  }
}

interface Frontmatter {
  title?: string
  description?: string
  componentId?: string
  railsId?: Array<string>
  tags?: Array<string>
}

/**
 * Get the site map for a content directory
 *
 * @param directory - the path to the directory that contains the content for
 * the site
 * @param baseUrl - the base url for the site
 */
export async function getSiteMap(directory: string, baseUrl: string) {
  const pages = await getPages(directory)
  return pages.map(page => {
    const slug = page.getSlug()
    const lastModified = page.getLastModified()
    const url = new URL(path.join(...slug), baseUrl)
    return {
      url: url.toString(),
      lastModified,
    }
  })
}

/**
 * Get the pages for a content directory
 *
 * @param directory - the path to the directory that contains the content
 */
export async function getPages(directory: string): Promise<Array<Page>> {
  const filepaths = []

  for await (const filepath of walk(directory)) {
    filepaths.push(filepath)
  }

  return filepaths.map(filepath => {
    const relativePath = path.relative(directory, filepath)
    return Page.create(filepath, relativePath)
  })
}

async function* walk(directory: string): AsyncGenerator<string> {
  const files = await fs.readdir(directory, {
    withFileTypes: true,
  })

  for (const file of files) {
    const filepath = path.join(directory, file.name)
    if (file.isDirectory()) {
      yield* walk(filepath)
    } else {
      yield filepath
    }
  }
}

type PageMap = Array<PageMapEntry>
type PageMapEntry =
  | {
      name: string
    }
  | {
      name: string
      children: Array<PageMapEntry>
    }

/**
 * Get the page hierarchy for a content directory
 *
 * @param directory - the path to the directory that contains the content
 */
export async function getPageHierarchy(directory: string): Promise<PageMap> {
  const files = await fs.readdir(directory, {
    withFileTypes: true,
  })

  return await Promise.all(
    files.map(async file => {
      if (file.isDirectory()) {
        return traverse(path.join(directory, file.name))
      }
      return {
        name: file.name,
      }
    }),
  )
}

async function traverse(directory: string): Promise<PageMapEntry> {
  const files = await fs.readdir(directory, {
    withFileTypes: true,
  })
  const name = path.basename(directory)

  return {
    name,
    children: await Promise.all(
      files.map(async file => {
        if (file.isDirectory()) {
          return traverse(path.join(directory, file.name))
        }
        const extension = path.extname(file.name)
        return {
          name: path.basename(file.name, extension),
        }
      }),
    ),
  }
}

/**
 * Get a post by its slug
 * @param directory - the path to the directory that contains the content
 * @param slug - the slug of the page
 */
export async function getPageBySlug(directory: string, slug: Array<string>): Promise<Page> {
  if (slug.length === 0) {
    throw new Error('Unable to find page for slug with no values')
  }

  const extensions = ['.mdx', '.md']

  const dir = slug.length === 1 ? directory : path.join(directory, ...slug.slice(0, slug.length - 1))
  const candidates = extensions.map(extension => {
    return path.format({
      dir,
      name: slug[slug.length - 1],
      ext: extension,
    })
  })
  const filepath = candidates.find(candidate => {
    return existsSync(candidate)
  })
  if (!filepath) {
    throw new Error(`Unable to find page for slug: [${slug.join(', ')}] in directory: ${directory}`)
  }

  const relativePath = path.relative(directory, filepath)
  return Page.create(filepath, relativePath)
}
