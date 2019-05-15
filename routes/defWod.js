var express = require('express');
var router = express.Router();
var constants = require("../constants");
var defWod = require('../services/defWodService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const DefWod = new defWod();
  var word =  DefWod.wordDefinition().then(data => {res.send(data)});
});

module.exports = router;
