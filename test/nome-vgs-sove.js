'use strict'

const tap = require('tap')
const isNsb = require('../index')
var options = {
  skoleid: 3830,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isNsb(options), false, 'Nome vgs, avdeling Søve returns false from 3960 Bamble')
