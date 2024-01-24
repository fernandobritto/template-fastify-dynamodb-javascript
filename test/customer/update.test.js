const debug = require('debug')('customer:test')
const app = require('../../src/app')

it('update customer', async () => {
  const customer = {
    email: 'jane@gmail.com',
    documentNumber: '03241069044',
    documentType: 'CPF',
    businessUnit: 'INFOENTER',
    givenName: 'Jane'
  }
  const response = await app.inject({
    method: 'PUT',
    headers: { 'x-businessUnit': 'INFOENTER' },
    url: `/${customer.documentNumber}`,
    body: customer
  })

  debug('response.body', response.body)

  expect(response.statusCode).toBe(200)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(JSON.parse(response.body)).toEqual({ documentNumber: '03241069044' })
})

it('returns non existent', async () => {
  const customer = {
    email: 'jane@gmail.com',
    documentNumber: '23168428019',
    documentType: 'CPF',
    businessUnit: 'INFOENTER',
    givenName: 'Jane'
  }
  const response = await app.inject({
    method: 'PUT',
    headers: { 'x-businessUnit': 'INFOENTER' },
    url: `/${customer.documentNumber}`,
    body: customer
  })

  debug('response.body', response.body)

  expect(response.statusCode).toBe(404)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(JSON.parse(response.body)).toEqual({ error: 'Not Found', message: 'customer not found', statusCode: 404 })
})
