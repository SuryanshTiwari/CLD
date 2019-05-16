var express = require('express');
var router = express.Router();
var constants = require("../constants");
var synonymsWod = require('../services/synonymsWodService');

/* GET users listing. */
router.get('/:word', function(req, res, next) {
  const SynonymsWod = new synonymsWod();
  var word = req.params.word;
  SynonymsWod.synonymsWod(word).then(data => {res.send(data)});
});

module.exports = router;
