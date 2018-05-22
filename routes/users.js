var express = require('express');
var router = express.Router();

const obj = [[["Device","Mobile","Computer"],["Mobile",10 ,25,23],["Computer",5,100,4]],
[["Gender","Male","Female","Other", "Aggregate"],["Male",10 ,25,23],["Female",5,100,4],["Other",5,100,4],["Aggregate",5,100,4]],
[["Race", "White", "Non-white"],["White",5,100,4],["Non-white",5,100,4]],
[["Year","18","19","20","21"],["18",5,100,4],["19",5,100,4],["20",5,100,4],["21",5,100,4]]]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(obj);
});

module.exports = router;
