const fastify = require('fastify')
const debug = require('debug')('customer:app')
const customer = require('./route/customer')
const health = require('./route/health')

const app = fastify({})
app.register(require('@fastify/helmet'))

app.head('/', (request, reply) => reply.code(200).send(''))

app.get('/', customer.list)
app.get('/:documentNumber', customer.byDocumentNumber)
app.post('/', customer.create)
app.put('/:documentNumber', customer.update)

app.get('/healthcheck', health.check)
app.get('/healthcheck/complete', health.complete)

app.setErrorHandler(function (error, request, reply) {
  debug(error.stack)
  reply.send(error)
})

module.exports = app
