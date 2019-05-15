const fs = require("fs");
const utilities = require("../utilities/utilities");

module.exports = class wordOfTheDayService {

    constructor() {
        this.utilities = new utilities();
    }

   async  get40WordsAndReturnRandomWord() {
        try {
          var  WordsList = [];
            for(var i = 0; i < 40; i++){
                var word = await this.utilities.generateWord();
                WordsList.push(word);
            }
            var idx = this.utilities.getRandomInt(40);
            return WordsList[idx];
        } catch (error) {
            throw error;
        }
    }
};