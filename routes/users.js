var express = require('express');
var router = express.Router();
var user = require('../app/controllers/users');

/* GET users listing. */
router.get('/', user.getAll);
router.get('/:userId', user.getOne);
router.get('/', user.create);
router.get('/:userId', user.update);
router.get('/:userId', user.remove);

module.exports = router;
