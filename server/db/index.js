var mysql = require('mysql');

var env = process.env.NODE_ENV === 'production' ? 'production' : 'dev';

var config = {
  production: {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : 'beerby'
  },
  dev: {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'beerby'
  }
};

var connection = mysql.createConnection(config[env]);

module.exports.connection = connection;