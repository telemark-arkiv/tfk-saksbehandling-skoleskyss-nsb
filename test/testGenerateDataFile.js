'use strict'

const tap = require('tap')
const generateDataFile = require('../lib/generateDataFile')

tap.test('requires an options object', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input: options object'

  generateDataFile(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.apiUrl to exist', function (test) {
  const options = {
    apiUrl: false
  }
  const expectedErrorMessage = 'Missing required input: options.apiUrl'

  generateDataFile(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.apiUrl to be a valid URL', function (test) {
  const options = {
    apiUrl: 'pysjepreik'
  }
  const expectedErrorMessage = 'Invalid URL: options.apiUrl'

  generateDataFile(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.queryList to exist', function (test) {
  const options = {
    apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
    queryList: false
  }
  const expectedErrorMessage = 'Missing required input: options.queryList'

  generateDataFile(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.queryList to be an array', function (test) {
  const options = {
    apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
    queryList: 'Notodden'
  }
  const expectedErrorMessage = 'Malformed input: options.queryList must be an array'

  generateDataFile(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.extras to be an array', function (test) {
  const options = {
    apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
    queryList: ['Notodden'],
    extras: 'liste'
  }
  const expectedErrorMessage = 'Malformed input: options.extras must be an array'

  generateDataFile(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.fileName to exist', function (test) {
  const options = {
    apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
    queryList: ['notodden'],
    fileName: false
  }
  const expectedErrorMessage = 'Missing required input: options.fileName'

  generateDataFile(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('writes a file on success', function (test) {
  const options = {
    apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
    queryList: ['notodden'],
    fileName: 'testnotodden.json'
  }

  generateDataFile(options, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data, 'File testnotodden.json written', 'Data OK')
    test.done()
  })
})
