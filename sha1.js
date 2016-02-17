var crypto = require('crypto')

module.exports = function createSha1 () {
  return crypto.createHash('sha1')
}
