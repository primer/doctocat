import {validateChecklistSchema, validateChecklist} from '../validate-checklists'

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

  for (const checklistSchema of valid) {
    test(`should validate ${JSON.stringify(checklistSchema)}`, () => {
      expect(() => validateChecklistSchema(checklistSchema)).not.toThrow()
    })
  }

  for (const checklistSchema of invalid) {
    test(`should not validate ${JSON.stringify(checklistSchema)}`, () => {
      expect(() => validateChecklistSchema(checklistSchema)).toThrow()
    })
  }
})

describe('validateChecklist()', () => {
  const valid = [
    {
      checklist: {dependenciesReviewed: true},
      checklistSchema: {
        title: 'Example checklist',
        items: [{id: 'dependenciesReviewed', description: 'Third-party dependencies have been reviewed'}]
      }
    }
  ]

  const invalid = [
    {
      checklist: {reviewed: true},
      checklistSchema: {
        title: 'Example checklist',
        items: [{id: 'dependenciesReviewed', description: 'Third-party dependencies have been reviewed'}]
      }
    },
    {
      checklist: {dependenciesReviewed: 1},
      checklistSchema: {
        title: 'Example checklist',
        items: [{id: 'dependenciesReviewed', description: 'Third-party dependencies have been reviewed'}]
      }
    },
    {
      checklist: ['dependenciesReviewed'],
      checklistSchema: {
        title: 'Example checklist',
        items: [{id: 'dependenciesReviewed', description: 'Third-party dependencies have been reviewed'}]
      }
    }
  ]

  for (const {checklist, checklistSchema} of valid) {
    test(`should validate ${JSON.stringify(checklist)}`, () => {
      expect(() => validateChecklist(checklist, checklistSchema)).not.toThrow()
    })
  }

  for (const {checklist, checklistSchema} of invalid) {
    test(`should not validate ${JSON.stringify(checklist)}`, () => {
      expect(() => validateChecklist(checklist, checklistSchema)).toThrow()
    })
  }
})
