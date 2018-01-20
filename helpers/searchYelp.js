var rp = require('request-promise');
const config = require('../config.js');

let getBreweriesByLocation = (zipCode) => {

  let options = {
    uri: 'https://api.yelp.com/v3/businesses/search?radius=24000&categories=breweries&location=' + zipCode,
    headers: {
      'Authorization': process.env.YELP_TOKEN || config.YELP_TOKEN
    }
  };

  return rp(options);
};

module.exports.getBreweriesByLocation = getBreweriesByLocation;