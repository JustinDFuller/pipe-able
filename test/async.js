const pipeProgram = require('../')

module.exports = pipeProgram(function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('this should print in the console!')
    }, 1000)
  })
})
