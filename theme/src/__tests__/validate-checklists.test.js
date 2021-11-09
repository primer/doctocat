import {validateChecklistSchema} from '../validate-checklists'

describe('validateChecklistSchema()', () => {
  const valid = [
    {
      title: 'Example checklist',
      items: []
    },
    {
      title: 'Example checklist',
      items: [{id: 'example', description: 'Example item'}]
    },
    {
      title: 'Example checklist',
      items: [{id: 'example', description: 'Example item', someMetadata: 1}]
    }
  ]

  const invalid = [
    {
      title: 'Example checklist'
    },
    {
      title: 'Example checklist',
      items: [{description: 'Example item'}]
    },
    {
      title: 1,
      items: []
    },
    {
      title: 'Example checklist',
      items: 1
    }
  ]

  for (const checklist of valid) {
    it(`should validate ${JSON.stringify(checklist)}`, () => {
      expect(() => validateChecklistSchema(checklist)).not.toThrow()
    })
  }

  for (const checklist of invalid) {
    it(`should not validate ${JSON.stringify(checklist)}`, () => {
      expect(() => validateChecklistSchema(checklist)).toThrow()
    })
  }
})
