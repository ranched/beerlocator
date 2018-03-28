var bodyParser = require('body-parser');
var controller = require('./controllers');
var express = require('express');
var items = require('./db');
var PORT = process.env.PORT || 3000;
var util = require('util');

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



app.listen(PORT, function() {
  console.log('listening on port ' + PORT + '!');
});

