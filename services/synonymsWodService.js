const fs = require("fs");
const utilities = require("../utilities/utilities");

module.exports = class synonymsWod {

    constructor() {
        this.utilities = new utilities();
    }

    async synonymsWod() {
        try {
            var wod = await this.utilities.getSynonyms();
            return wod;
        } catch (error) {
            throw error;
        }
    }
};