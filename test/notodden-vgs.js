'use strict'

const tap = require('tap')
const isNsb = require('../index')
var options = {
  skoleid: 3674,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isNsb(options), true, 'Notodden vgvs returns true from 3960 Stathelle')

options.postnummer = 3801
tap.equal(isNsb(options), false, 'Notodden vgvs returns false from 3801 Bø')

options.postnummer = 3904
tap.equal(isNsb(options), true, 'Notodden vgvs returns true from 3904 Porsgrunn')

options.postnummer = 3812
tap.equal(isNsb(options), false, 'Notodden vgvs returns false from 3812 Akkerhaugen')

options.postnummer = 3785
tap.equal(isNsb(options), true, 'Notodden vgvs returns true from 3785 Skien')

options.postnummer = 3880
tap.equal(isNsb(options), false, 'Notodden vgvs returns false from 3880 Dalen')
