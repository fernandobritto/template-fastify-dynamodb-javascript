require('dotenv').config()
const AWS = require('aws-sdk-mock')

const Resolver = function () {
  return {
    resolveMx: async (domain) => {
      if (['inexistentdomain.com', 'gmail.com.br'].includes(domain)) throw new Error()
      return [{ exchange: 'gmail-smtp-in.l.google.com' }]
    }
  }
}
jest.mock('dns', () => {
  return {
    promises: { Resolver }
  }
})

AWS.mock('DynamoDB', 'listTables', (params, callback) => {
  return Promise.resolve({
    TableNames: ['infoenter']
  })
})

AWS.mock('DynamoDB.DocumentClient', 'scan', (params) => {
  const count = params.ExclusiveStartKey ? 10 : 60
  return Promise.resolve({
    Count: count,
    Items: Array.from(Array(count).keys()).map((item) => {
      return { documentNumber: item }
    })
  })
})

AWS.mock('DynamoDB.DocumentClient', 'get', (params) => {
  const data = params.Key.documentNumber === '03241069044' ? { Item: { documentNumber: '03241069044' } } : {}
  return Promise.resolve(data)
})

AWS.mock('DynamoDB.DocumentClient', 'put', (params) => {
  return Promise.resolve('')
})
