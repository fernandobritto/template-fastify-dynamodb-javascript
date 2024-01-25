const nameSchema = {
  type: 'string',
  minLength: 2,
  maxLength: 128
}
const body = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    telephone: { type: 'string' },

    businessUnit: {
      type: 'string',
      enum: ['INFOENTER', 'INFO', 'ENTER']
    },
    active: { type: 'boolean' },

    givenName: nameSchema,
    additionalName: nameSchema,
    familyName: nameSchema,
    nickName: nameSchema,

    documentNumber: {
      type: 'string',
      minLength: 11,
      maxLength: 14
    },
    documentType: {
      type: 'string',
      enum: ['CPF', 'PASSPORT']
    },
    nationality: { type: 'string' },

    gender: {
      type: 'string',
      enum: ['Masculino', 'Feminino', 'Transgênero', 'Não Binario', 'Outros']
    },
    birthDate: { type: 'string', format: 'date' },

    createdAt: { type: 'string', format: 'date-time' },
    updatedAt: { type: 'string', format: 'date-time' },

    emails: {
      type: 'array',
      items: { type: 'string' }
    },
    telephones: {
      type: 'array',
      items: { type: 'string' }
    },

    address: {
      type: 'object',
      properties: {
        streetAddress: { type: 'string', minLength: 2, maxLength: 400 },
        addressNumber: { type: 'string', maxLength: 100 },
        district: { type: 'string', maxLength: 255 }, // bairro
        complement: { type: 'string', maxLength: 255 },
        postalCode: {
          type: 'string',
          minLength: 8,
          maxLength: 8
        },
        addressLocality: { type: 'string', maxLength: 100 }, // cidade
        addressRegion: { type: 'string', minLength: 2, maxLength: 2 }, // estado
        referencePoint: { type: 'string', maxLength: 255 },
        localityCode: { type: 'number' },
        addressType: {
          type: 'string',
          enum: ['BUSINESS', 'HOME', 'RURAL', 'POST_OFFICE_BOX', 'APARTMENT', 'CONDOMINIUM', 'OTHER']
        },

        geolocation: {
          type: 'object',
          properties: {
            latitude: { type: 'number' },
            longitude: { type: 'number' }
          }
        }
      }
    }
  }
}
const required = ['givenName', 'businessUnit', 'documentNumber', 'documentType']
const query = {}
const params = {
  type: 'object',
  required: ['documentNumber'],
  properties: {
    documentNumber: { type: 'string', pattern: '^[0-9]{9,14}$' }
  }
}
const headers = {}

module.exports = { body, query, params, headers, required }
