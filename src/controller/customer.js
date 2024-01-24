const newrelic = require('newrelic')
const createError = require('http-errors')
const repository = require('../repository/customer')

const X_BUSINESS_HEADER = 'x-businessunit'

const customer = {
  list(request, reply) {
    newrelic.setTransactionName('GET /')

    const businessUnit = request.headers[X_BUSINESS_HEADER]
    return repository.list(businessUnit, request.query.lastItem)
  },

  async byDocumentNumber(request, reply) {
    newrelic.setTransactionName('GET /:documentNumber')

    const businessUnit = request.headers[X_BUSINESS_HEADER]
    const result = await repository.byDocumentNumber(businessUnit, request.params.documentNumber)
    if (!result) {
      throw new createError.NotFound('customer not found')
    }
    return result
  },

  create(request, reply) {
    newrelic.setTransactionName('POST /')

    const body = {
      ...request.body,
      businessUnit: request.headers[X_BUSINESS_HEADER]
    }

    reply.code(201)
    return repository.put(body)
  },

  async update(request, reply) {
    newrelic.setTransactionName('PUT /:documentNumber')

    const businessUnit = request.headers[X_BUSINESS_HEADER]
    const body = {
      ...request.body,
      documentNumber: request.params.documentNumber,
      businessUnit
    }

    const exists = await repository.byDocumentNumber(businessUnit, request.params.documentNumber)
    if (!exists) {
      throw new createError.NotFound('customer not found')
    }

    return repository.put(body, exists)
  }
}
module.exports = customer
