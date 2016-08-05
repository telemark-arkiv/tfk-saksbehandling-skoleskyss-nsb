'use strict'

module.exports = function transportByNsb (options) {
  if (!options) {
    throw new Error('Missing required input: options object')
  }
  if (!options.postnummer) {
    throw new Error('Missing required input: options.postnummer')
  }
  if (!options.skoleid) {
    throw new Error('Missing required input: options.skoleid')
  }

  const basePath = require('path').resolve(__dirname)
  const isFile = require('is-file')
  const skoleid = parseInt(options.skoleid, 10)
  const fileName = basePath + '/lib/data/' + skoleid + '.json'
  const postnummer = parseInt(options.postnummer, 10)

  if (isFile(fileName)) {
    const zips = require(fileName)
    return zips.indexOf(postnummer) > -1
  } else {
    return false
  }
}
