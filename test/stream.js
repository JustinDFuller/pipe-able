const fs = require('fs')
const path = require('path')

const pipeProgram = require('../')

module.exports = pipeProgram(function (fileUrl) {
  return fs.createReadStream(path.resolve(__dirname, fileUrl), {
    encoding: 'utf8'
  })
})
