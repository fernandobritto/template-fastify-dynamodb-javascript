const debug = require('debug')('customer:test')
const app = require('../src/app')

it('GET `/healthcheck` route', async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/healthcheck'
  })
  const expected = { status: 'ok' }

  expect(response.statusCode).toBe(200)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(JSON.parse(response.body)).toEqual(expected)
})

it('GET `/healthcheck/complete` route', async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/healthcheck/complete'
  })

  const expected = {
    meta: {
      name: 'template-fastify-dynamodb-javascript',
      description: 'Template for API Rest with Fastify, DynamoDB and Javascript',
      uptime: 1.944190388,
      nodeVersion: 'v14.16.0'
    },
    status: 'ok',
    dependencies: [
      {
        name: 'dynamodb',
        type: 'main database',
        critical: true,
        status: 'ok'
      }
    ]
  }

  debug(response.statusCode)

  expect(response.statusCode).toBe(200)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(JSON.parse(response.body).meta.name).toBe(expected.meta.name)
  expect(JSON.parse(response.body).status).toBe(expected.status)
  expect(JSON.parse(response.body).dependencies).toEqual(expected.dependencies)
})
