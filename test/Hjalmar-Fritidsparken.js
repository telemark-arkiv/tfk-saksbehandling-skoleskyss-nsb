const tap = require('tap')
const isNsb = require('../index')
var options = {
  skoleid: 3733,
  postnummer: ''
}

options.postnummer = 3692
tap.equal(isNsb(options), true, 'Hjalmar Johansen vgs, avdeling Fritidsparken returns true from 3692 Sauland')

options.postnummer = 3697
tap.equal(isNsb(options), false, 'Hjalmar Johansen vgs, avdeling Fritidsparken returns false from 3697 Hjartdal')

options.postnummer = 3673
tap.equal(isNsb(options), true, 'Hjalmar Johansen vgs, avdeling Fritidsparken returns true from 3673 Notodden')

options.postnummer = 3903
tap.equal(isNsb(options), false, 'Hjalmar Johansen vgs, avdeling Fritidsparken returns false from 3903 Porsgrunn')

options.postnummer = 3812
tap.equal(isNsb(options), true, 'Hjalmar Johansen vgs, avdeling Fritidsparken returns true from 3812 Akkerhaugen')

options.postnummer = 3820
tap.equal(isNsb(options), true, 'Hjalmar Johansen vgs, avdeling Fritidsparken returns true from 3820 Nordagutu')

options.postnummer = 3805
tap.equal(isNsb(options), false, 'Hjalmar Johansen vgs, avdeling Fritidsparken returns false from 3805 Bø i Telemark')
