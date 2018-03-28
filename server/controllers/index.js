const models = require('../models/');
const checkAPIandSearch = require('../../helpers/checkAPIandSearch.js');
const responses = require('../../helpers/responses.js');
const fetchBreweryData = require('../../helpers/fetchBreweryData');
// const fetchBeersByBrewery = require('../../helpers/fetchBeersByBrewery.js');

module.exports.breweries = {
  get(req, res) {
    function sendResponse(response, data) {
      res.send({ results: data });
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

  post(req, res) {
    console.log('POST REQUEST RECEIVED');

    const sendResponse = responses.sendPostResponse.bind(null, res);

    checkAPIandSearch.checkAPIandSearch(req)
      .then((names) => {
        const promises = [];

        names.forEach((name) => {
          promises.push(fetchBreweryData.brewerySearchBA(name)
            .then(fetchBreweryData.scrapeBrewerySearchBA));
        });

        return Promise.all(promises);
      })

      .then((breweryObjs) => {
        console.log('breweries to get scores for: ', breweryObjs);
        const promises = [];

        breweryObjs.forEach((obj) => {
          console.log('breweryObj: ', obj);
          if (obj[0].brewery_url !== undefined) {
            promises.push(fetchBreweryData.breweryPageBA(obj[0].brewery_url)
              .then(fetchBreweryData.scrapeBreweryPageBA));
          }
        });
        return Promise.all(promises);
      })

      .then((breweryObjs) => {
        console.log('response: ', breweryObjs);
        sendResponse(breweryObjs);
      })

      .catch((err) => {
        sendResponse();
        return console.log(err);
      });
  },
};
