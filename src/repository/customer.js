const debug = require('debug')('customer:repository')
const { documentClient } = require('../../src/config/dynamodb')

const getNextLink = (result) => {
  if (result.Count < customer.DEFAULT_SIZE) {
    return {}
  }

  return {
    rel: 'next',
    href: `?lastItem=${result.Items[result.Count - 1]?.documentNumber}`
  }
}
const getSelfLink = (item) => {
  return {
    rel: 'self',
    href: `?documentNumber=${item.documentNumber}`
  }
}

const customer = {
  TABLE_NAME: 'infoenter',
  DEFAULT_SIZE: 50,
  async list(businessUnit, lastItem) {
    const params = {
      TableName: this.TABLE_NAME,
      Limit: customer.DEFAULT_SIZE,

      ExpressionAttributeValues: { ':businessUnit': businessUnit },
      FilterExpression: 'businessUnit = :businessUnit'
    }
    if (lastItem) {
      params.ExclusiveStartKey = { documentNumber: lastItem, businessUnit }
    }
    return documentClient
      .scan(params)
      .promise()
      .then((result) => {
        return {
          size: this.DEFAULT_SIZE,
          // total: result.Count,
          items: result.Items,
          links: [getNextLink(result)]
        }
      })
  },
  byDocumentNumber(businessUnit, documentNumber) {
    const params = {
      Key: { businessUnit, documentNumber },
      TableName: this.TABLE_NAME
    }

    debug('byDocumentNumber', { params })

    return documentClient
      .get(params)
      .promise()
      .then((result) => {
        return (
          result.Item && {
            ...result.Item,
            links: [getSelfLink(result)]
          }
        )
      })
  },
  put(payload, old = {}) {
    const data = {
      email: payload.email,
      businessUnit: payload.businessUnit,
      givenName: payload.givenName,
      familyName: payload.familyName,
      nickName: payload.nickName,
      documentNumber: payload.documentNumber,
      documentType: payload.documentType,
      gender: payload.gender,
      birthDate: payload.birthDate,
      active: payload.active,

      telephones: payload.telephones,
      address: payload.address,

      createdAt: old.createdAt ?? new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    const putParams = {
      TableName: this.TABLE_NAME,
      Item: data,
      ReturnValues: 'ALL_OLD'
    }

    debug({ putParams })

    return documentClient
      .put(putParams)
      .promise()
      .then((result) => {
        return this.byDocumentNumber(data.businessUnit, data.documentNumber)
      })
  }
}
module.exports = customer
