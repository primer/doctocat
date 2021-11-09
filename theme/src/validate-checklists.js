const validate = require('jsonschema').validate

const schema = {
  type: 'object',
  properties: {
    title: {
      type: 'string'
    },
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          description: {
            type: 'string'
          }
        },
        required: ['id', 'description']
      }
    }
  },
  required: ['title', 'items']
}

exports.validateChecklistSchema = checklistSchema => {
  const {errors} = validate(checklistSchema, schema)

  if (errors.length > 0) {
    const errorMessage = errors.map(error => `• ${error.message}`).join('\n')
    throw new Error(`Errors:\n${errorMessage}`)
  }
}
