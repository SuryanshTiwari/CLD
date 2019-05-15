const fs = require("fs");
const utilities = require("../utilities/utilities");

module.exports = class wordDefinition {

    constructor() {
        this.utilities = new utilities();
    }

    async wordDefinition(word) {
        try {
            var wod = await this.utilities.getWodDefinition(word);
            // console.log("wod")
            return wod;
        } catch (error) {
            throw error;
        }
    }
};