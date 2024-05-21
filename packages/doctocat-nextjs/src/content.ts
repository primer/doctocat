import process from 'node:process'
import path from 'node:path'

export interface Post {}

export async function getPosts(contentDirectory: string): Promise<Array<Post>> {
  const directory = contentDirectory ? path.resolve(contentDirectory) : path.join(process.cwd(), 'content')
  return []
}

export async function getPost(): Promise<Post | null> {
  return null
}
