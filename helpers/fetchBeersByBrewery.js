const rp = require('request-promise');
const config = require('../config.js');

let getBeersByBrewery = (breweryName) => {

  let options = {
    uri: 'http://api.brewerydb.com/v2/breweries', 
    qs: {
      key: config.BEERDB_TOKEN,
      name: breweryName
    }
  };

  return rp(options);
};

module.exports.getBeersByBrewery = getBeersByBrewery;