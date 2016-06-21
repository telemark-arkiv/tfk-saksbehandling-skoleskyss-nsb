'use strict'

const tap = require('tap')
const isNsb = require('../index')
var options = {
  skoleid: 3880,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isNsb(options), false, 'Vest-Telemark vgs returns false from 3960 Bamble')
