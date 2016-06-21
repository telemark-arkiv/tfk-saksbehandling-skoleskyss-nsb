[![Build Status](https://travis-ci.org/telemark/tfk-saksbehandling-skoleskyss-nsb.svg?branch=master)](https://travis-ci.org/telemark/tfk-saksbehandling-skoleskyss-nsb)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-saksbehandling-skoleskyss-nsb/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-saksbehandling-skoleskyss-nsb?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-saksbehandling-skoleskyss-nsb
Node-module for identifying NSB as transporter.

It uses a combination of zipcodes and schoolids.

## Installation

### From npm
```sh
$ npm i tfk-saksbehandling-skoleskyss-nsb
```

### From GitHub

```sh
$ git clone git@github.com:telemark/tfk-saksbehandling-skoleskyss-nsb.git
```

cd into the directory and run the setup script

```sh
$ npm run setup
```

This will install the module dependencies

## Usage
Pass in an options object and get true or false in return.

**postnummer** zipcode, required

**skole** schoolid, required

```javascript

'use strict';

const transportByNSB = require('tfk-saksbehandling-skoleskyss-nsb')
const drangedal = {
  postnummer: 3750,
  skoleid: 3802
}
const fyresdal = {
  postnummer: 3870,
  skoleid: 3802
}

console.log(transportByNSB(drangedal)) //=> true

console.log(transportByNSB(fyresdal)) //=> false

```

The logic is explained in the [docs/postkoder.pr.vgs.skole.2016.xlsx](/docs/postkoder.pr.vgs.skole.2016.xlsx) file

The complete list of schoolids is in [lib/data/skoler.json](/lib/data/skoler.json)

## Test

```sh
$ npm test
```