const pipeProgram = require('../')

module.exports = pipeProgram(function (input) {
  return input + ' world'
})
