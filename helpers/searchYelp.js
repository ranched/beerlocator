var rp = require('request-promise');
const config = require('../config.js');

let getBreweriesByLocation = (zipCode) => {

  let options = {
    uri: 'https://api.yelp.com/v3/businesses/search?term=brewery&location=' + zipCode,
    headers: {
      'Authorization': config.YELP_TOKEN
    }
  };

  return rp(options);
};

module.exports.getBreweriesByLocation = getBreweriesByLocation;