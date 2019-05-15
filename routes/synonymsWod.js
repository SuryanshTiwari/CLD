var express = require('express');
var router = express.Router();
var constants = require("../constants");
var synonymsWod = require('../services/synonymsWodService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const SynonymsWod = new synonymsWod();
  var word =  SynonymsWod.synonymsWod().then(data => {res.send(data)});
});

module.exports = router;
