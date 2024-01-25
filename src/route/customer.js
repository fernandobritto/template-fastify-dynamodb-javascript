const customer = require('../controller/customer')
const { preHandler, preValidation } = require('../hook/customer')
const schema = require('../schema/customer')

const paginationSchema = {
  type: 'object',
  properties: {
    total: { type: 'number' },
    size: { type: 'number' },
    items: {
      type: 'array',
      items: schema.body
    },
    links: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          rel: { type: 'string' },
          href: { type: 'string' }
        }
      }
    }
  }
}
const route = {
  list: {
    preValidation,
    handler: customer.list,
    schema: {
      response: { 200: paginationSchema }
    }
  },
  byDocumentNumber: {
    preValidation,
    handler: customer.byDocumentNumber,
    schema: {
      response: { 200: schema.body },
      params: schema.params
    }
  },
  create: {
    preValidation,
    preHandler,
    handler: customer.create,
    schema: {
      body: { ...schema.body, required: schema.required },
      response: { 201: schema.body }
    }
  },
  update: {
    preValidation,
    preHandler,
    handler: customer.update,
    schema: {
      body: { ...schema.body, required: schema.required },
      response: { 200: schema.body },
      params: schema.params
    }
  }
}

module.exports = route
