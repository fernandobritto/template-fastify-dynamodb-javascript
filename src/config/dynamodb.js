const debug = require('debug')('customer:config:dynamodb')
const https = require('https')
const http = require('http')
const AWS = require('aws-sdk')

const agentOptions = {
  keepAlive: true,
  maxSockets: Infinity // Infinity == 50
}
const agent = /development|test/.test(process.env.NODE_ENV)
  ? new http.Agent(agentOptions)
  : new https.Agent(agentOptions)

debug('-----------', process.env.NODE_ENV)

AWS.config.update({
  region: process.env.DYNAMODB_REGION,
  endpoint: process.env.DYNAMODB_ENDPOINT,
  httpOptions: { agent }
})

const dynamodb = new AWS.DynamoDB()
const documentClient = new AWS.DynamoDB.DocumentClient()

const check = () => {
  const data = { name: 'dynamodb', type: 'main database', critical: true }

  return dynamodb
    .listTables()
    .promise()
    .then((result) => {
      data.status = Array.isArray(result.TableNames) ? 'ok' : 'nok'
      return data
    })
    .catch((err) => {
      debug(err)
      data.status = 'nok'
      data.message = err.message
      return data
    })
}

module.exports = {
  dynamodb,
  documentClient,
  check
}
