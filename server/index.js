var util = require('util');
var express = require('express');
var bodyParser = require('body-parser');
var items = require('./db');
//var router = require('./routes.js');
var controller = require('./controllers');


var app = express();

//var router = require('./routes.js');


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/items', function(req, res){
  controller.breweries.get(req, res);
});

app.post('/breweries', function(req, res){
  controller.breweries.post(req, res);
});






app.listen(3000, function() {
  console.log('listening on port 3000!');
});

