'use strict';

var assert = require('assert');
var getDataFromApi = require('../lib/getDataFromApi');

describe('getDataFromApi', function() {

  it('requires an options object', function(done) {

    var options = false;

    getDataFromApi(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options object/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.apiUrl to exist', function(done) {

    var options = {
      apiUrl: false
    };

    getDataFromApi(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.apiUrl/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.apiUrl to be a valid URL', function(done) {

    var options = {
      apiUrl: 'pysjepreik'
    };

    getDataFromApi(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Invalid URL: options.apiUrl/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.query to exist', function(done) {

    var options = {
      apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
      query: false
    };

    getDataFromApi(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.query/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('returns a list on success', function(done) {

    var options = {
      apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
      query: 'notodden'
    };

    getDataFromApi(options, function(err, data) {
      if (err) {
        throw err;
      } else {
        assert.equal(data.length, 14);
      }
      done();
    });

  });

  it('returns an empty list on fail', function(done) {

    var options = {
      apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
      query: 'spøkepølse'
    };

    getDataFromApi(options, function(err, data) {
      if (err) {
        throw err;
      } else {
        assert.equal(data.length, 0);
      }
      done();
    });

  });
});