const rp = require('request-promise');
const config = require('../config.js');

const appendName = (obj, name) => (obj['name'] = name);

let getBeersByBrewery = (brewery) => {

  let options = {
    uri: 'http://api.brewerydb.com/v2/brewery/' + brewery + '/beers', 
    qs: {
      key: config.BEERDB_TOKEN
    }
  };

  return rp(options).then(function(result){ appendName(result, brewery); });
};

module.exports.getBeersByBrewery = getBeersByBrewery;