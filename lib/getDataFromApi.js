'use strict';

function getDataFromApi(options, callback) {
  var validUrl = require('valid-url');

  if (!options) {
    return callback(new Error('Missing required input: options object'));
  }

  if (!options.apiUrl) {
    return callback(new Error('Missing required input: options.apiUrl'));
  }

  if (options.apiUrl && !validUrl.is_web_uri(options.apiUrl)) {
    return callback(new Error('Invalid URL: options.apiUrl'));
  }

  if (!options.query) {
    return callback(new Error('Missing required input: options.query'));
  }

  var https = require('https');
  var apiEndpoint = options.apiUrl;
  var body = '';
  var url = apiEndpoint + '/' + options.query;
  https.get(url, function(res) {

    res.on('data', function(chunk) {
      body += chunk.toString();
    });

    res.on('end', function() {
      var json = JSON.parse(body);
      return callback(null, json);
    });

  }).on('error', function(error) {
    return callback(error, null);
  });
}

module.exports = getDataFromApi;