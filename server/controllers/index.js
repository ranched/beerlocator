var models = require('../models/');
var db = require('../db/');

module.exports.messages = {
  get: function (req, res) {
    function sendResponse(res, data){
      res.send({results: data});
    }
    models.breweries.get(sendResponse.bind(null, res));
  }, 

  post: function (req, res) {
    var data = req.body;
    function sendResponse(res){
      res.send();
    }
    models.breweries.post(data, sendResponse.bind(null, res));


  }
};