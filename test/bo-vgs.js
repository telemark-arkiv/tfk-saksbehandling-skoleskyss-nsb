'use strict'

const tap = require('tap')
const isNsb = require('../index')
var options = {
  skoleid: 3802,
  postnummer: ''
}

options.postnummer = 3750
tap.equal(isNsb(options), true, 'Bø vgs returns true from 3750 Dragedal')

options.postnummer = 3870
tap.equal(isNsb(options), false, 'Bø vgs returns true from 3870 Fyresdal')
