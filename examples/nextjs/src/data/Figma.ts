interface ComponentData {}

export async function getComponents(): Promise<Array<ComponentData>> {
  const response = await fetch(
    'https://raw.githubusercontent.com/primer/figma/main/packages/web/generated/components.json',
  )
  const json = await response.json()

  return json.components.map(component => {
    return {
      ...component,
      figmaId: component.id,
      id: `figma-${component.name}-${component.status}`,
    }
  })
}

export async function getFileURL(): Promise<string> {
  const response = await fetch('https://raw.githubusercontent.com/primer/figma/main/packages/web/generated/file.json')
  const json = await response.json()
  return json.fileUrl
}
