require('newrelic')
require('dotenv').config()

const app = require('./app')
const dnscache = require('dnscache')
const debug = require('debug')('customer:index')
const cluster = require('cluster')
const http = require('http')
const https = require('https')

const port = process.env.PORT || 3000
const numCPUs = process.env.CPU_LIMIT || 1

// @ts-ignore
http.globalAgent.keepAlive = true
// @ts-ignore
https.globalAgent.keepAlive = true

dnscache({
  enable: true,
  ttl: 300,
  cachesize: 1000
})

const onWorkerError = (code, signal) => debug(code, signal)
if (cluster.isMaster && numCPUs > 1) {
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork()
    worker.on('error', onWorkerError)
  }

  cluster.on('exit', () => {
    const newWorker = cluster.fork()
    newWorker.on('error', onWorkerError)
    debug('A new worker rises', newWorker.process.pid)
  })
  cluster.on('exit', (err) => debug(err))
} else {
  app.listen({ port, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      throw err
    }
    debug(`server listening on ${address}`)
  })

  process.on('SIGTERM', () => {
    app.close(() => {
      // eslint-disable-next-line
      process.exit(0)
    })
  })
}

module.exports = app
