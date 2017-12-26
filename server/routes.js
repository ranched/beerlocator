var controller = require('./controllers');
var router = require('express').Router();

//router.get('/items', controller.messages.get);
router.get('/items', function(req, res){
  res.send('hi');
});


module.exports = router;