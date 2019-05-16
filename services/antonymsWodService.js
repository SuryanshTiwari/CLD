const fs = require("fs");
const utilities = require("../utilities/utilities");

module.exports = class antonymsWod {

    constructor() {
        this.utilities = new utilities();
    }

    async antonymsWod(word) {
        try {
            var wod = await this.utilities.getAntonyms(word);
            return wod;
        } catch (error) {
            throw error;
        }
    }
};