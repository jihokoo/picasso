var express = require('express');
var router = express.Router();
var index = require('../app/controllers/index');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { header: 'Express' });
});

module.exports = router;
