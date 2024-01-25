const debug = require('debug')('customer:test')
const app = require('../../src/app')

it('retrieves by documentNumber', async () => {
  const response = await app.inject({
    method: 'GET',
    headers: { 'x-businessUnit': 'INFOENTER' },
    url: '/03241069044'
  })

  debug('response.body', response.body)

  expect(response.statusCode).toBe(200)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(JSON.parse(response.body)).toEqual({ documentNumber: '03241069044' })
})

it('returns not found', async () => {
  const response = await app.inject({
    method: 'GET',
    headers: { 'x-businessUnit': 'INFOENTER' },
    url: '/23168428019'
  })

  debug('response.body', response.body)

  expect(response.statusCode).toBe(404)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(JSON.parse(response.body)).toEqual({ error: 'Not Found', message: 'customer not found', statusCode: 404 })
})
