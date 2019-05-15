var express = require('express');
var router = express.Router();
var constants = require("../constants");
var defWod = require('../services/defWodService');

/* GET users listing. */
router.get('/:word', function(req, res, next) {
  const DefWod = new defWod();
  var word = req.params.word;
  var word =  DefWod.wordDefinition(word).then(data => {res.send(data)});
});

module.exports = router;
