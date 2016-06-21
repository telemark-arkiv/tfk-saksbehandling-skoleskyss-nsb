'use strict'

const tap = require('tap')
const isNsb = require('../index')
var options = {
  skoleid: 39602,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isNsb(options), false, 'Bamble croftholmen returns false from 3960 Stathelle')
