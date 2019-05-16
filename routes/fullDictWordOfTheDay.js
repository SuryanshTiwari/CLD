var express = require('express');
var router = express.Router();
var constants = require("../constants");
var fullDictWod = require('../services/fullDictWodService');
var fs = require('fs');


/* GET users listing. */
router.get('/', function(req, res, next) {
  const FullDictWod = new fullDictWod();
  fs.readFile('./wod.txt', 'utf8', function(err, data){
    FullDictWod.fullDictWod(data).then(data => {res.send(data)});
  });
});

module.exports = router;