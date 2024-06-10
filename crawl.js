import fs from 'node:fs/promises'
import got from 'got'
import {parse} from 'node-html-parser'

async function main() {
  const queue = ['https://primer.style/']
  const visited = new Set()
  const failed = new Set()
  const pages = new Map()

  while (queue.length > 0) {
    const url = queue.shift()
    if (visited.has(url)) {
      continue
    }

    console.log('Visiting %s (%s visited, %s remaining)', url, visited.size, queue.length)

    visited.add(url)

    try {
      const response = await got(url)
      console.log(response.redirectUrls)
      const root = parse(response.body)
      const links = root.querySelectorAll('a').flatMap(link => {
        const href = link.getAttribute('href')

        if (!href) {
          return []
        }

        if (href.startsWith('http')) {
          return href
        }

        if (href.includes('*')) {
          return []
        }

        if (href.startsWith('/') || href.startsWith('.')) {
          const normalized = new URL(href, url)
          return `https://${normalized.host}${normalized.pathname}`
        }

        return []
      })

      pages.set(url, [])

      for (const link of links) {
        if (
          link.startsWith('https://primer.style/view-components/lookbook') ||
          link.startsWith('https://primer.style/react/storybook') ||
          link.startsWith('https://primer.style/css/storybook')
        ) {
          continue
        }

        if (link.startsWith('https://primer.style')) {
          const url = new URL(link)
          const bareUrl = `https://${url.host}${url.pathname}`
          if (!visited.has(bareUrl) && !queue.includes(bareUrl)) {
            queue.push(bareUrl)
            pages.get(url).push(bareUrl)
          }
        } else {
          // console.log('Skipping link: %s', link)
        }
      }
    } catch (error) {
      failed.add(url)
      console.log(error)
    }
  }

  // await fs.writeFile('pages.json', JSON.stringify(Object.fromEntries(pages), null, 2))
  // await fs.writeFile('failed.json', JSON.stringify(Object.fromEntries(pages), null, 2))
}

main().catch(error => {
  console.log(error)
  process.exit(1)
})
