interface PackageResponse {
  name: string
  ['dist-tags']: Record<string, string>
  versions: Record<string, Record<string, unknown>>
}

export async function getLatestVersion(): Promise<string> {
  const url = new URL('@primer/react', 'https://registry.npmjs.com')
  const response = await fetch(url)
  if (response.status === 200) {
    const json = (await response.json()) as PackageResponse
    return json['dist-tags'].latest
  }
  const result = await response.text()
  throw new Error(`Received non-200 response with text: ${result}`)
}

interface ComponentData {}

export async function getComponents(): Promise<Array<ComponentData>> {
  const version = await getLatestVersion()
  const response = await fetch(`https://unpkg.com/@primer/react@${version}/generated/components.json`, {
    redirect: 'follow',
  })
  const json = await response.json()
  return json.map(component => {
    return {
      ...component,
      componentId: component.docsId ?? component.id,
      id: `react-${component.id}`,
    }
  })
}
