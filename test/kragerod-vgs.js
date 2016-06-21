'use strict'

const tap = require('tap')
const isNsb = require('../index')
var options = {
  skoleid: 3770,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isNsb(options), false, 'Kragerød vgs returns false from 3960 Bamble')
