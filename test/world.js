const pipeAble = require('../')

module.exports = pipeAble(function (input) {
  return input + ' world'
})
