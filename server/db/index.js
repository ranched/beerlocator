var mysql = require('mysql');

var connection = mysql.createConnection({
  // host     : process.env.DB_HOST,
  // user     : process.env.DB_USER,
  // password : process.env.DB_PASS,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'beerby'
});

module.exports.connection = connection;