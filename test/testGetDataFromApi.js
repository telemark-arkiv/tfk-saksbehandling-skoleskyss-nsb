'use strict'

const tap = require('tap')
const getDataFromApi = require('../lib/getDataFromApi')

tap.test('requires an options object', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input: options object'

  getDataFromApi(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.apiUrl to exist', function (test) {
  const options = {
    apiUrl: false
  }
  const expectedErrorMessage = 'Missing required input: options.apiUrl'

  getDataFromApi(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.apiUrl to be a valid URL', function (test) {
  const options = {
    apiUrl: 'pysjepreik'
  }
  const expectedErrorMessage = 'Invalid URL: options.apiUrl'

  getDataFromApi(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.query to exist', function (test) {
  const options = {
    apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
    query: false
  }
  const expectedErrorMessage = 'Missing required input: options.query'

  getDataFromApi(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('returns a list on success', function (test) {
  const options = {
    apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
    query: 'notodden'
  }

  getDataFromApi(options, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data.length, 14, 'Data OK')
    test.done()
  })
})

tap.test('returns an empty list on fail', function (test) {
  const options = {
    apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
    query: 'spøkepølse'
  }

  getDataFromApi(options, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data.length, 0, 'Data OK')
    test.done()
  })
})
