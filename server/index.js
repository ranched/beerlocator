var express = require('express');
var bodyParser = require('body-parser');
var items = require('./db');
//var router = require('./routes.js');
var controller = require('./controllers');
var yelpFetch = require('../helpers/searchYelp.js');
var responses = require('../helpers/responses.js');

var app = express();

//var router = require('./routes.js');


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/items', function(req, res){
  controller.breweries.get(req, res);
});

//-- Woring display of Yelp results;
app.post('/breweries', function(rfeq, res){
  console.log('POST REQUEST RECEIVED');

  let sendResponse = responses.sendPostResponse.bind(null, res);

  let breweries = [];

  yelpFetch.getBreweriesByLocation(req.body.zipCode)
  .then(function(result){
    breweries = JSON.parse(result).businesses;
    console.log(Object.prototype.toString.call(breweries));
    return breweries.map( brewery => brewery.name );
  })
  .then(function(breweries){
    console.log('sending response: ', breweries);
    sendResponse(breweries);
  })
  .catch(function(err){
    sendResponse();
    return console.log(err);
  });

});






app.listen(3000, function() {
  console.log('listening on port 3000!');
});

