const fs = require("fs");
const utilities = require("../utilities/utilities");

module.exports = class examplesWod {

    constructor() {
        this.utilities = new utilities();
    }

    async examplesWod(word) {
        try {
            var wod = await this.utilities.getExamples(word);
            return wod;
        } catch (error) {
            throw error;
        }
    }
};