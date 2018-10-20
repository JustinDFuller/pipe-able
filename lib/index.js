const stdin = require('get-stdin')

module.exports = function (fn) {
  return stdin()
    .then(function (input) {
      return Promise.resolve(fn(input))
    })
    .then(function (output) {
      process.stdout.write(output)
    })
}
