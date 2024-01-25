require('dotenv').config()

process.env.NODE_ENV = 'development'

const { dynamodb } = require('../../src/config/dynamodb')

const params = require('./create-table.json')

dynamodb
  .createTable(params)
  .promise()
  .then((data) => {
    return console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2))
  })
  .catch((err) => {
    console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2))
  })
