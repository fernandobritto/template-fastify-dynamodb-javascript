const debug = require('debug')('customer:test')
const app = require('../../src/app')
const data = require('../customer.json')

it('creates a new customer', async () => {
  const response = await app.inject({
    method: 'POST',
    headers: { 'x-businessUnit': 'INFOENTER' },
    url: '/',
    body: data
  })

  debug('response.body', response.body)

  expect(response.statusCode).toBe(201)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(JSON.parse(response.body)).toEqual({ documentNumber: '03241069044' })
})

it('without givenName', async () => {
  const customer = { documentNumber: '03241069044', businessUnit: 'INFOENTER' }
  const response = await app.inject({
    method: 'POST',
    headers: { 'x-businessUnit': 'INFOENTER' },
    url: '/',
    body: customer
  })

  debug('response.body', response.body)

  expect(response.statusCode).toBe(400)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(JSON.parse(response.body)).toEqual({
    statusCode: 400,
    error: 'Bad Request',
    message: "body must have required property 'givenName'"
  })
})
