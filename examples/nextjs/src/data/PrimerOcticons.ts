interface PackageResponse {
  name: string
  ['dist-tags']: Record<string, string>
  versions: Record<string, Record<string, unknown>>
}

export async function getLatestVersion(): Promise<string> {
  const url = new URL('@primer/octicons', 'https://registry.npmjs.com')
  const response = await fetch(url)
  if (response.status === 200) {
    const json = (await response.json()) as PackageResponse
    return json['dist-tags'].latest
  }
  const result = await response.text()
  throw new Error(`Received non-200 response with text: ${result}`)
}

interface IconData {}

export async function getIcons(): Promise<Array<IconData>> {
  const response = await fetch('https://unpkg.com/@primer/octicons/build/data.json', {redirect: 'follow'})
  const json = await response.json()

  return Object.values(json).flatMap(icon => {
    return Object.entries(icon.heights).map(([height, data]) => {
      return {
        id: `icon-${icon.name}-${height}`,
        name: icon.name,
        keywords: icon.keywords,
        width: data.width,
        height: parseInt(height, 10),
        // We're calling this field `svgPath` because
        // `path` is a reserved field name.
        svgPath: data.path,
        heights: Object.keys(icon.heights),
      }
    })
  })
}
