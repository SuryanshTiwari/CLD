var express = require('express');
var router = express.Router();
var constants = require("../constants");
var wordOfTheDay = require('../services/wordOfTheDayService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const WordOfTheDay = new wordOfTheDay();
  var word =  WordOfTheDay.get40WordsAndReturnRandomWord().then(data => {res.send(data.word)});
});

module.exports = router;
