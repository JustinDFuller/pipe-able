const pipeProgram = require('../')

module.exports = pipeProgram(function () {
  return Promise.reject(new Error('The promise was rejected'))
})
