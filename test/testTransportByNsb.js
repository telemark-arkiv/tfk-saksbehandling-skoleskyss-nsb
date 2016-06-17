'use strict'

const tap = require('tap')
const transportByNsb = require('../index')

tap.throws(
  function () {
    const options = false
    transportByNsb(options)
  },
  {message: 'Missing required input: options object'},
  'requires an options object'
)

tap.throws(
  function () {
    const options = {
      postnummer: false
    }
    transportByNsb(options)
  },
  {message: 'Missing required input: options.postnummer'},
  'requires options.postnummer to exist'
)

tap.throws(
  function () {
    const options = {
      postnummer: true,
      skoleid: false
    }
    transportByNsb(options)
  },
  {message: 'Missing required input: options.skoleid'},
  'requires options.skoleid to exist'
)
//
tap.test('returns true if postnummer Notodden og skole Skogmo', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3735
  }
  tap.equal(transportByNsb(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer Notodden og skole Bø', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3802
  }
  tap.equal(transportByNsb(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Skien og skole Notodden', function (test) {
  const options = {
    postnummer: 3703,
    skoleid: 3674
  }
  tap.equal(transportByNsb(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer Skien og skole Bø', function (test) {
  const options = {
    postnummer: 3703,
    skoleid: 3802
  }
  tap.equal(transportByNsb(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Drangedal og skole Bø', function (test) {
  const options = {
    postnummer: 3753,
    skoleid: 3802
  }
  tap.equal(transportByNsb(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer Drangedal og skole Skogmo', function (test) {
  const options = {
    postnummer: 3753,
    skoleid: 3735
  }
  tap.equal(transportByNsb(options), false, 'Test OK')
  test.done()
})
