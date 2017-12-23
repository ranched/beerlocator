var database = require('../db');

var knex = require('knex')({
  client: 'mysql',
  connection: database.connection
});

var bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;