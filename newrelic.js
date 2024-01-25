'use strict'
exports.config = {
  agent_enabled: process.env.NODE_ENV === 'hml' || process.env.NODE_ENV === 'prd',
  app_name: ['$(NEW_RELIC_APP_NAME)'],
  license_key: '$(NEW_RELIC_LICENSE_KEY)',
  distributed_tracing: {
    enabled: true
  },
  logging: {
    level: 'info',
    enabled: true
  },
  application_logging: {
    forwarding: {
      enabled: true
    }
  },
  error_collector: {
    enabled: true,
    ignore_status_codes: [301, 302, 404],
    ignore_classes: ['MulterError']
  },
  allow_all_headers: true,
  attributes: {
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
      'response.headers.cookie',
      'response.headers.authorization',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*'
    ]
  }
}
