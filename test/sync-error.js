const pipeProgram = require('../')

module.exports = pipeProgram(function () {
  throw new Error('This is a sync error.')
})
