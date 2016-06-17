'use strict'

module.exports = function generateDataFile (options, callback) {
  const validUrl = require('valid-url')
  const fs = require('fs')
  const getDataFromApi = require('./getDataFromApi')

  if (!options) {
    return callback(new Error('Missing required input: options object'))
  }

  if (!options.apiUrl) {
    return callback(new Error('Missing required input: options.apiUrl'))
  }

  if (options.apiUrl && !validUrl.is_web_uri(options.apiUrl)) {
    return callback(new Error('Invalid URL: options.apiUrl'))
  }

  if (!options.queryList) {
    return callback(new Error('Missing required input: options.queryList'))
  }

  if (!Array.isArray(options.queryList)) {
    return callback(new Error('Malformed input: options.queryList must be an array'))
  }

  if (options.extras && !Array.isArray(options.extras)) {
    return callback(new Error('Malformed input: options.extras must be an array'))
  }

  if (!options.fileName) {
    return callback(new Error('Missing required input: options.fileName'))
  }

  var zipcodes = []
  var jobsToDo = options.queryList.length
  var jobsDone = 0

  function areWeDoneYet () {
    jobsDone++
    if (jobsDone === jobsToDo) {
      fs.writeFile('lib/data/' + options.fileName, JSON.stringify(zipcodes), function (error) {
        if (error) {
          return callback(error, null)
        } else {
          return callback(null, 'File ' + options.fileName + ' written')
        }
      })
    }
  }

  if (options.extras) {
    options.extras.forEach(function (zip) {
      zipcodes.push(zip)
    })
    if (jobsToDo === 0) {
      jobsDone = -1
      areWeDoneYet()
    }
  }

  options.queryList.forEach(function (query) {
    getDataFromApi({'apiUrl': options.apiUrl, query: query}, function (error, data) {
      if (error) {
        return callback(error, null)
      } else {
        data.forEach(function (zip) {
          zipcodes.push(zip.Postnummer)
        })
        areWeDoneYet()
      }
    })
  })
}
