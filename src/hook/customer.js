const debug = require('debug')('customer:hook')
const createError = require('http-errors')
const { Resolver } = require('dns').promises
const resolver = new Resolver()

const preHandler = async (request, reply) => {
  if (!request.body.email) {
    throw new createError.BadRequest('Missing email on request')
  }

  const hostname = request.body.email.split('@')[1]
  debug({ hostname })

  return resolver.resolveMx(hostname).catch((e) => {
    throw new createError.BadRequest('invalid email domain')
  })
}

const preValidation = async (request, reply, next) => {
  if (!request.headers['x-businessunit']) {
    throw new createError.BadRequest('Missing business unit header on request')
  }
  next()
}

module.exports = {
  preHandler,
  preValidation
}
