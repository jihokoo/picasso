var express = require('express');
var router = express.Router();
var index = require('../app/controllers/users');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
