const newrelic = require('newrelic')
const { check } = require('../../src/config/dynamodb')
const pkg = require('../../package.json')

const health = {
  check(request, reply) {
    newrelic.setTransactionName('GET /healthcheck')
    return { status: 'ok' }
  },

  async complete(request, reply) {
    newrelic.setTransactionName('GET /healthcheck/complete')

    const dynamoCheck = await check()
    return {
      meta: {
        name: pkg.name,
        description: pkg.description,
        uptime: process.uptime(),
        nodeVersion: process.version
      },
      status: dynamoCheck.status,
      dependencies: [dynamoCheck]
    }
  }
}

module.exports = health
