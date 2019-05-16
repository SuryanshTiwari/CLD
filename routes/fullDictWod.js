var express = require('express');
var router = express.Router();
var constants = require("../constants");
var fullDictWod = require('../services/fullDictWodService');

/* GET users listing. */
router.get('/:word', function(req, res, next) {
  const FullDictWod = new fullDictWod();
  var word = req.params.word;
  FullDictWod.fullDictWod(word).then(data => {res.send(data)});
});

module.exports = router;