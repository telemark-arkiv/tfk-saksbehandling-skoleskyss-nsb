'use strict'

module.exports = function transportByNsb (options) {
  if (!options) {
    throw new Error('Missing required input: options object')
  }
  if (!options.postnummer) {
    throw new Error('Missing required input: options.postnummer')
  }
  if (!options.skoleid) {
    throw new Error('Missing required input: options.skoleid')
  }

  const skoleBoNome = require('./lib/data/skoleids_bo_nome.json')
  const skoleNotodden = require('./lib/data/skoleids_notodden.json')
  const skoleSkienPgr = require('./lib/data/skoleids_skien_pgr.json')
  const postnrDrangedal = require('./lib/data/drangedal.json')
  const postnrSkienPgrBambleSiljan = require('./lib/data/skien_pgr_bamble_siljan.json')
  const postnrTinnHjartdalNotodden = require('./lib/data/tinn_hjartdal_notodden.json')
  const skoleid = parseInt(options.skoleid, 10)
  const postnummer = parseInt(options.postnummer, 10)

  // Skole på Notodden og bosted i grenland -> true
  if (skoleNotodden.indexOf(skoleid) > -1 && postnrSkienPgrBambleSiljan.indexOf(postnummer) > -1) {
    return true
  }

  // Skole i grenland og bosted tinn, hjartdal, notodden og nordagutu -> true
  if (skoleSkienPgr.indexOf(skoleid) > -1 && postnrTinnHjartdalNotodden.indexOf(postnummer) > -1) {
    return true
  }

  // Skole i Nome/Bø og bosted Drangedal -> true
  if (skoleBoNome.indexOf(skoleid) > -1 && postnrDrangedal.indexOf(postnummer) > -1) {
    return true
  }

  // Alt annet gir false
  return false
}
