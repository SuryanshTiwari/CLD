const fs = require("fs");
const utilities = require("../utilities/utilities");

module.exports = class wordDefinition {

    constructor() {
        this.utilities = new utilities();
    }

    async wordDefinition() {
        try {
            var wod = await this.utilities.getWodDefinition();
            // console.log("wod")
            return wod;
        } catch (error) {
            throw error;
        }
    }
};