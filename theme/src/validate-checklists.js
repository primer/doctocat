const validate = require('jsonschema').validate

exports.validateChecklistSchema = checklistSchema => {
  const jsonSchema = {
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

  const {errors} = validate(checklistSchema, jsonSchema)

  if (errors.length > 0) {
    const errorMessage = errors.map(error => `• ${error.message}`).join('\n')
    throw new Error(`Errors:\n${errorMessage}`)
  }
}

exports.validateChecklist = (checklist, checklistSchema) => {
  const jsonSchema = checklistSchemaToJsonSchema(checklistSchema)

  const {errors} = validate(checklist, jsonSchema)

  if (errors.length > 0) {
    const errorMessage = errors.map(error => `• ${error.message}`).join('\n')
    throw new Error(`Errors:\n${errorMessage}`)
  }
}

function checklistSchemaToJsonSchema(checklistSchema) {
  const ids = checklistSchema.items.map(item => item.id)

  const properties = ids.reduce((properties, id) => {
    properties[id] = {type: 'boolean'}
    return properties
  }, {})

  return {
    type: 'object',
    properties,
    required: ids,
    additionalProperties: false
  }
}
