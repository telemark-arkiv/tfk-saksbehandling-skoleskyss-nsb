'use strict';

var assert = require('assert');
var generateDataFile = require('../lib/generateDataFile');

describe('generateDataFile', function() {

  it('requires an options object', function(done) {

    var options = false;

    generateDataFile(options, function(err, data) {
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

    generateDataFile(options, function(err, data) {
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

    generateDataFile(options, function(err, data) {
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

  it('requires options.queryList to exist', function(done) {

    var options = {
      apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
      queryList: false
    };

    generateDataFile(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.queryList/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.queryList to be an array', function(done) {

    var options = {
      apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
      queryList: 'Notodden'
    };

    generateDataFile(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Malformed input: options.queryList must be an array/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.extras to be an array', function(done) {

    var options = {
      apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
      queryList: ['Notodden'],
      extras: 'liste'
    };

    generateDataFile(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Malformed input: options.extras must be an array/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.fileName to exist', function(done) {

    var options = {
      apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
      queryList: ['notodden'],
      fileName: false
    };

    generateDataFile(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.fileName/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('writes a file on success', function(done) {

    var options = {
      apiUrl: 'https://api.t-fk.no/postnummer/kommunenavn',
      queryList: ['notodden'],
      fileName: 'testnotodden.json'
    };

    generateDataFile(options, function(err, data) {
      if (err) {
        throw err;
      } else {
        assert.equal(data, 'File testnotodden.json written');
      }
      done();
    });

  });
});