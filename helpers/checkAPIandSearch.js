var yelpFetch = require('./searchYelp.js');


function checkAPIandSearch(req){
  if(req.body.api === 'yelp'){
    return  yelpFetch.getBreweriesByLocation(req.body.zipCode)
      .then(function(result){
          breweries = JSON.parse(result).businesses;
          breweries.forEach(item => { console.log('yelp results:', item.name);});
          return breweries.map( brewery => brewery.name );

       });
  } else {
    console.log('__________req.body:', req.body);
  }
}

module.exports.checkAPIandSearch = checkAPIandSearch;

