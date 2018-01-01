const getBeersByBrewery = require('./fetchBeersByBrewery');





function populateBeerList(brewery){
  let beers = [];

  getBeersByBrewery(brewery)
  .then(function(){})

  return beers;
}

