'use strict'

const tap = require('tap')
const isNsb = require('../index')
var options = {
  skoleid: 3825,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isNsb(options), false, 'Nome vgs, avdeling Lunde returns false from 3960 Bamble')

options.postnummer = 3750
tap.equal(isNsb(options), true, 'Nome vgs, avdeling Lunde returns true from 3750 Drangedal')

options.postnummer = 3870
tap.equal(isNsb(options), false, 'Nome vgs, avdeling Lunde returns false from 3870 Fyresdal')

options.postnummer = 3766
tap.equal(isNsb(options), false, 'Nome vgs, avdeling Lunde returns false from 3766 Sannidal')
