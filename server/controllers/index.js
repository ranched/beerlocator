var models = require('../models/'),
    //db = require('../db/'),
    checkAPIandSearch = require('../../helpers/checkAPIandSearch.js'),
    responses = require('../../helpers/responses.js'),
    getBreweryID = require('../../helpers/getBreweryID.js'),
    searchBreweryID = require('../../helpers/searchBreweryID.js'),
    fetchBreweryData = require('../../helpers/fetchBreweryData'),
    fetchBeersByBrewery = require('../../helpers/fetchBeersByBrewery.js');

module.exports.breweries = {
  get: function (req, res) {
    function sendResponse(res, data){
      res.send({results: data});
    }
    models.breweries.get(sendResponse.bind(null, res));
  }, 

  // post: function (req, res) {
  //   var data = req.body;
  //   function sendResponse(res){
  //     res.send();
  //   }
  //   models.breweries.post(data, sendResponse.bind(null, res));


  // }

  post: function(req, res){
    console.log('POST REQUEST RECEIVED');

    let sendResponse = responses.sendPostResponse.bind(null, res);

    let breweries = [];
      
    checkAPIandSearch.checkAPIandSearch(req)  
    // .then(function(breweries){
    
    //   let promises = [];
    //   breweries.forEach(brewery => {
    //     promises.push(searchBreweryID.searchBreweryIDbreweryDB(brewery));
    //   });
    //   return Promise.all(promises);
    
    // })
    // .then(function(breweries){ 
    
    //   let names = [];
    //   for(let i = 0; i < breweries.length; i++){
    //     if (breweries[i]){
    //     names.push(breweries[i].replace(/Company/g, ''));
    //     }
    //   }
    //   console.log('Breweries after BID search in BDB:');
    //   names.forEach(item => console.log('name:', item));
    //   return names;
    // })
    .then(function(names){

      let promises = [];

      const log = (data) => {
        
        console.log('data:', data);
        return data;
      };

      names.forEach(name => {
        promises.push(fetchBreweryData.brewerySearchBA(name).then(fetchBreweryData.scrapeBrewerySearchBA));
      });


      return Promise.all(promises);

    })
    .then(function(breweryObjs){
      console.log('breweries to get scores for: ', breweryObjs);
      let promises = [];

      breweryObjs.forEach((obj, i) => {
        console.log('breweryObj: ', obj);
        if(obj[0].brewery_url !== undefined){
          promises.push(fetchBreweryData.breweryPageBA(obj[0].brewery_url).then(fetchBreweryData.scrapeBreweryPageBA));
        }
      });
      return Promise.all(promises);
      
    })
    .then(function(breweryObjs){
      console.log('response: ', breweryObjs);
      sendResponse(breweryObjs);
    })
    .catch(function(err){
    
      sendResponse();
      return console.log(err);
    
    });

  }
};