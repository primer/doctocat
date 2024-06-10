export async function getLatestVersion(): Promise<string> {
  const response = await fetch('https://rubygems.org/api/v1/versions/primer_view_components/latest.json')
  const json = await response.json()
  if (typeof json.version === 'string') {
    return json.version
  }
  throw new Error('Unable to fetch latest version for Primer View Components')
}

interface ComponentData {}

export async function getComponents(version: string): Promise<Array<ComponentData>> {
  const url = new URL('https://api.github.com/repos/primer/view_components/contents/static/info_arch.json')
  url.searchParams.set('ref', version)
  const response = await fetch(url)
  const json = await response.json()
  const components = JSON.parse(Buffer.from(json.content, 'base64').toString())
  return components.map(component => {
    return {
      ...component,
      id: `rails-${component.status}-${component.component}`,
    }
  })
}
