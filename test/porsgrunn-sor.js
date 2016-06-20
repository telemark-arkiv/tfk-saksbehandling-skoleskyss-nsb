'use strict'

const tap = require('tap')
const isNsb = require('../index')
var options = {
  skoleid: 39182,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isNsb(options), false, 'Porsgrunn vgs, avdeling Sor returns false from 3960 Bamble')

options.postnummer = 3692
tap.equal(isNsb(options), true, 'Porsgrunn vgs, avdeling Sor returns true from 3960 Hjartdal')

options.postnummer = 3780
tap.equal(isNsb(options), false, 'Porsgrunn vgs, avdeling Sor returns false from 3780 Kragerød')

options.postnummer = 3672
tap.equal(isNsb(options), true, 'Porsgrunn vgs, avdeling Sor returns true from 3672 Notodden')

options.postnummer = 3902
tap.equal(isNsb(options), false, 'Porsgrunn vgs, avdeling Sor returns false from 3902 Porsgrunn')

options.postnummer = 3812
tap.equal(isNsb(options), true, 'Porsgrunn vgs, avdeling Sor returns true from 3812 Sauherad')

options.postnummer = 3820
tap.equal(isNsb(options), true, 'Porsgrunn vgs, avdeling Sor returns true from 3820 Sauherad')

options.postnummer = 3835
tap.equal(isNsb(options), false, 'Porsgrunn vgs, avdeling Sor returns false from 3835 Seljord')
