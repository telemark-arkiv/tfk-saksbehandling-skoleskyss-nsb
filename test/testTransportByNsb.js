'use strict';

var assert = require('assert');
var transportByNsb = require('../index');

describe('transportByNsb', function() {

  it('requires an options object', function(done) {

    var options = false;
    var result = transportByNsb(options);
    var condition = false;
    if ((result instanceof Error) && /Missing required input: options object/.test(result)) {
      condition = true;
    }
    assert.equal(true, condition);
    done();
  });

  it('requires options.postnummer to exist', function(done) {

    var options = {
      postnummer: false
    };
    var result = transportByNsb(options);
    var condition = false;
    if ((result instanceof Error) && /Missing required input: options.postnummer/.test(result)) {
      condition = true;
    }
    assert.equal(true, condition);
    done();
  });

  it('requires options.skoleid to exist', function(done) {

    var options = {
      postnummer: true,
      skoleid: false
    };
    var result = transportByNsb(options);
    var condition = false;
    if ((result instanceof Error) && /Missing required input: options.skoleid/.test(result)) {
      condition = true;
    }
    assert.equal(true, condition);
    done();
  });

  it('returns true if postnummer Notodden og skole Skogmo', function(done) {

    var options = {
      postnummer: 3681,
      skoleid: 3735
    };
    var result = transportByNsb(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer Notodden og skole Bø', function(done) {

    var options = {
      postnummer: 3681,
      skoleid: 3802
    };
    var result = transportByNsb(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer Skien og skole Notodden', function(done) {

    var options = {
      postnummer: 3703,
      skoleid: 3674
    };
    var result = transportByNsb(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer Skien og skole Bø', function(done) {

    var options = {
      postnummer: 3703,
      skoleid: 3802
    };
    var result = transportByNsb(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer Drangedal og skole Bø', function(done) {

    var options = {
      postnummer: 3753,
      skoleid: 3802
    };
    var result = transportByNsb(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer Drangedal og skole Skogmo', function(done) {

    var options = {
      postnummer: 3753,
      skoleid: 3735
    };
    var result = transportByNsb(options);
    assert.equal(false, result);
    done();
  });

});