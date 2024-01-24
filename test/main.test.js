const app = require('../src/app')

it('HEAD `/` route', async () => {
  const response = await app.inject({
    method: 'HEAD',
    url: '/'
  })

  expect(response.statusCode).toBe(200)
  expect(response.headers['content-type']).toBe('text/plain; charset=utf-8')
  expect(response.body).toEqual('')
})

it('GET `/not/found` route', async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/not/found'
  })

  const expected = {
    error: 'Not Found',
    message: 'Route GET:/not/found not found',
    statusCode: 404
  }

  expect(response.statusCode).toBe(404)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(JSON.parse(response.body)).toEqual(expected)
})

it('GET `/` route should throw without x-businessUnit', async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/'
  })

  const expected = {
    error: 'Bad Request',
    message: 'Missing business unit header on request',
    statusCode: 400
  }

  expect(response.statusCode).toBe(400)
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
  expect(JSON.parse(response.body)).toEqual(expected)
})
