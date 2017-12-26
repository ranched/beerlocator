var db = require('../db/');

module.exports.sendResponse = function sendResponse(res, data) {
  res.send({results: data});
};

module.exports.breweries = {
  get: function (cb) {
    return db.connection.query('SELECT * FROM breweries', function(err, results){
      if(err){
        throw err;
      }
      cb(results);
    });
  }, 
  post: function (obj, cb) {
    return db.connection.query(
      "INSERT INTO `breweries` (`name`,`street`,`avg_rating`,`review_count`,`id_ba`) VALUES ('Jester King Brewery','13005 Fitzhugh Road',4.08,19540,24018)", function(err, results){
        if(err){
          throw err;
        }
        console.log('successfully posted to the db');
      });

  }
};
