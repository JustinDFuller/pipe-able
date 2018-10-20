const stdin = require('get-stdin')

module.exports = function (fn) {
  return stdin()
    .then(function (input) {
      return Promise.resolve(fn(input))
    })
    .then(function (output) {
      if (output && output.pipe) {
        return output.pipe(process.stdout)
      }

      return process.stdout.write(output)
    })
    .catch(function (error) {
      return process.stderr.write(error.message)
    })
}
