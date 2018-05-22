var express = require('express');
var router = express.Router();

const obj = require('./obj.jsonTest')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(obj);
});

module.exports = router;
