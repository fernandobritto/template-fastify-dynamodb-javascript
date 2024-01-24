const { preHandler, preValidation } = require('./customer')

it('#preHandler inexistend domain', async () => {
  const request = {
    body: { email: 'invalidemail@inexistentdomain.com' }
  }

  await expect(async () => {
    await preHandler(request)
  }).rejects.toThrow('invalid email domain')
})

it('#preHandler without email', async () => {
  const request = {
    body: {}
  }

  await expect(async () => {
    await preHandler(request)
  }).rejects.toThrow('Missing email on request')
})

it('#preHandler valid mx domain', async () => {
  const request = {
    body: { email: 'invalidemail@gmail.com' }
  }

  const result = await preHandler(request)
  expect(result[0].exchange).toEqual(expect.stringMatching(/gmail-smtp-in\.l\.google\.com/))
})

it('#preValidation without x-businessUnit header', async () => {
  const request = {
    headers: { 'x-businessunit': '' }
  }

  await expect(async () => {
    await preValidation(request)
  }).rejects.toThrow('Missing business unit header on request')
})
