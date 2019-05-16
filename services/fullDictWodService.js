const fs = require("fs");
const utilities = require("../utilities/utilities");

module.exports = class fullDictWod {

    constructor() {
        this.utilities = new utilities();
    }

    async fullDictWod(word) {
        try {
            var wod = await this.utilities.getAllDetails(word);
            return wod;
        } catch (error) {
            throw error;
        }
    }
};