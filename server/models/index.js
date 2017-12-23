var bookshelf = require('../bookshelf.config.js');

var Beer = bookshelf.Model.extend({
  tableName: 'beers',
  book: function() {
    return this.belongsTo(Brewery);
  }
});

var Brewery = bookshelf.Model.extend({
  tableName: 'breweries',
  beers: function() {
    return this.hasMany(Beer);
  }
});

// User.where('id', 1).fetch({withRelated: ['posts.tags']}).then(function(user) {
//   console.log(user.related('posts').toJSON());
// }).catch(function(err) {
//   console.error(err);
// });