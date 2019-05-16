var express = require('express');
var router = express.Router();
var constants = require("../constants");
var antonymsWod = require('../services/antonymsWodService');

/* GET users listing. */
router.get('/:word', function(req, res, next) {
  const AntonymsWod = new antonymsWod();
  var word =  AntonymsWod.antonymsWod(word).then(data => {res.send(data)});
});

module.exports = router;
