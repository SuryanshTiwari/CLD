const fs = require("fs");
const utilities = require("../utilities/utilities");

module.exports = class wordOfTheDayService {

    constructor() {
        this.utilities = new utilities();
    }

   async  get40WordsAndReturnRandomWord() {
        try {
          var  WordsList = [];
            for(var i = 0; i < 4; i++){
                var word = await this.utilities.generateWord();
                WordsList.push(word);
            }
            var idx = this.utilities.getRandomInt(4);
            return WordsList[idx];
        } catch (error) {
            throw error;
        }
    }
};