const health = require('../controller/health')

const route = {
  check: health.check,
  complete: health.complete
}

module.exports = route
