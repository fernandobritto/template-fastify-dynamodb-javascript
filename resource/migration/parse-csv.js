require('dotenv').config()
const { documentClient } = require('../../src/config/dynamodb')

const csv = require('csv-parser')
const fs = require('fs')
const results = []
let i = 0

console.log(new Date())
const stream = fs
  .createReadStream('/Users/fernandobritto/infoenter/Data_base_V5.csv')
  .pipe(
    csv({
      separator: ';',
      mapHeaders: ({ header, index }) => header.toLowerCase()
    })
  )
  .on('data', async (data) => {
    const item = mapper(data)
    // console.log('item', item)

    const putParams = {
      TableName: 'infoenter',
      Item: item,
      ReturnValues: 'ALL_OLD'
    }

    i++
    results.push(documentClient.put(putParams).promise())

    if (i % 1000 === 0) {
      stream.pause()

      await Promise.all(results)
      console.log(i)
      stream.resume()
    }
  })
  .on('end', () => {
    console.log('end')
  })

const getScholarity = (data) => {
  if (data['superior completo'] === '1') return 'superior completo'
  if (data['medio completo'] === '1') return 'medio completo'
  if (data['fundamental completo'] === '1') return 'fundamental completo'
  else return null
}

const mapper = (data) => {
  const birthDate = data.datanascimento.replace(' 00:00', '').split('/')
  return {
    documentNumber: data.cpf || data['﻿cpf'],
    documentType: 'CPF',
    businessUnit: 'INFOENTER',

    updatedAt: new Date(data['dt_atualização']).toISOString(),
    createdAt: new Date(data['data cadastro']).toISOString(),
    active: data['situacao (ativo /inativo)'] === '1',
    // data.podetrocar: 1,
    // data.podepontuar: 1,
    // enviarcomunicacoes: '0',
    newsletter: data.enviaremail === '1',
    givenName: data.nome.trim(),
    familyName: data.sobrenome.trim(),
    email: data.email.toLowerCase(),
    birthDate: birthDate.length ? `${birthDate[2]}-${birthDate[1]}-${birthDate[0]}` : null,
    gender: data.genero || null,

    maritalStatus: data['estado civil'],
    rg: data.rg,

    nationality: data.nacionalidade !== 'NULL' ? data.nacionalidade : null,
    dependents: data.nrodependentes,
    job: data.cargo,
    // 'telefone comercial': '',
    // 'telefone residencial': '',
    telephone: data['telefone celular'] ? '+55' + data['telefone celular'].replace(/\D+/g, '') : null,

    scholarity: getScholarity(data),

    salaryCountryZone: data.faixapaisfidelidade !== 'NULL' ? data.faixapaisfidelidade : null,
    salaryZone: data.pessoafaixarendafidelidade !== 'NULL' ? data.pessoafaixarendafidelidade : null,
    salaryDescription: data.descricao !== 'NULL' ? data.descricao : null,
    address: {
      addressRegion: data.estado,
      addressLocality: data.cidade,
      streetAddress: data.rua,
      complement: data.complemento,
      postalCode: data.cep,
      district: data.bairro
    }
  }
}
