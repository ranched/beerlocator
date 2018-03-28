var mysql = require('mysql');

var env = process.env.NODE_ENV === 'production' ? 'production' : 'dev';

var config = {
  production: process.env.JAWSDB_URL,
  dev: {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'beerby'
  }
};

var connection = mysql.createConnection(config[env]);

module.exports.connection = connection;