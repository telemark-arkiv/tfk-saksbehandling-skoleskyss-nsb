'use strict'

module.exports = function getDataFromApi (options, callback) {
  var validUrl = require('valid-url')

  if (!options) {
    return callback(new Error('Missing required input: options object'))
  }

  if (!options.apiUrl) {
    return callback(new Error('Missing required input: options.apiUrl'))
  }

  if (options.apiUrl && !validUrl.is_web_uri(options.apiUrl)) {
    return callback(new Error('Invalid URL: options.apiUrl'))
  }

  if (!options.query) {
    return callback(new Error('Missing required input: options.query'))
  }

  const https = require('https')
  const apiEndpoint = options.apiUrl
  var body = ''
  const url = apiEndpoint + '/' + options.query
  https.get(url, function (res) {
    res.on('data', function (chunk) {
      body += chunk.toString()
    })

    res.on('end', function () {
      const json = JSON.parse(body)
      return callback(null, json)
    })
  }).on('error', function (error) {
    return callback(error, null)
  })
}
