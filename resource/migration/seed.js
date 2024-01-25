require('dotenv').config()
const { documentClient } = require('../../src/config/dynamodb')

const putParams = {
  TableName: 'infoenter',
  Item: {
    documentNumber: '03241069044',
    businessUnit: 'INFOENTER'
  },
  ReturnValues: 'ALL_OLD'
}

documentClient
  .put(putParams)
  .promise()
  .then((data) => {
    return console.log('putItem data', data)
  })
  .catch((err) => {
    console.error('putItem err', err)
  })
