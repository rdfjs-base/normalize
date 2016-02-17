var Sha1 = require('sha.js/sha1')

module.exports = function createSha1 () {
  return new Sha1()
}
