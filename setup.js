'use strict';

var apiUrl = 'https://api.t-fk.no/postnummer/kommunenavn';
var generateDataFiles = require('./lib/generateDataFile');
var jobsToDo = 3;
var jobsDone = 0;

function areWeDoneYet(){
  jobsDone++;
  if (jobsDone === jobsToDo) {
    console.log('Everything\'s shiny, Cap\'n. Not to fret.');
    process.exit(0);
  }
}

//generates files for Drangedal
generateDataFiles({apiUrl:apiUrl, queryList:['Drangedal'], fileName:'drangedal.json'}, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
  areWeDoneYet();
});

//generates files for Tinn, Hjartdal, Notodden og 3820 Nordagutu
generateDataFiles({apiUrl:apiUrl, queryList:['Tinn', 'Hjartdal', 'Notodden'], extras:[3820], fileName:'tinn_hjartdal_notodden.json'}, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
  areWeDoneYet();
});

//generates files for Skien, Porsgrunn, Bamble og Siljan
generateDataFiles({apiUrl:apiUrl, queryList:['Skien', 'Porsgrunn', 'Bamble', 'Siljan'], fileName:'skien_pgr_bamble_siljan.json'}, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
  areWeDoneYet();
});