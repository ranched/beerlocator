const yelpFetch = require('./searchYelp.js');

function checkAPIandSearch(req) {
  if (req.body.api === 'yelp') {
    return yelpFetch.getBreweriesByLocation(req.body.zipCode)
      .then((result) => {
        const breweries = JSON.parse(result).businesses;
        breweries.forEach(item => console.log('yelp results:', item.name));
        return breweries.map(brewery => brewery.name);
      });
  }
  console.log('__________req.body:', req.body);
  return req.body.api;
}

module.exports.checkAPIandSearch = checkAPIandSearch;
