var express = require('express');
var router = express.Router();
var constants = require("../constants");
var examplesWod = require('../services/examplesWodService');

/* GET users listing. */
router.get('/:word', function(req, res, next) {
  const ExamplesWod = new examplesWod();
  var word = req.params.word;
  ExamplesWod.examplesWod(word).then(data => {res.send(data)});
});

module.exports = router;
