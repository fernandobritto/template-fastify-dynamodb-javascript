const debug = require('debug')('customer:test')
const app = require('../../src/app')

it('GET `/` list customers', async () => {
  const response = await app.inject({
    method: 'GET',
    headers: { 'x-businessUnit': 'INFOENTER' },
    url: '/'
  })
  debug(response.body)

  const body = JSON.parse(response.body)
  expect(response.statusCode).toBe(200)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(body.items[0].documentNumber).toBe('0')
  expect(body.links).toEqual([{ rel: 'next', href: '?lastItem=59' }])
})

it('GET `/` list customers next page', async () => {
  const response = await app.inject({
    method: 'GET',
    headers: { 'x-businessUnit': 'INFOENTER' },
    url: '/?lastItem=49'
  })
  debug(response.body)

  const body = JSON.parse(response.body)
  expect(response.statusCode).toBe(200)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(body.items[0].documentNumber).toBe('0')
  expect(body.links[0].rel).toBeUndefined()
})

it('GET `/` without x-businessUnit header should throw', async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/'
  })
  debug(response.body)

  const body = JSON.parse(response.body)
  expect(response.statusCode).toBe(400)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(body.message).toBe('Missing business unit header on request')
  expect(body.error).toBe('Bad Request')
})
