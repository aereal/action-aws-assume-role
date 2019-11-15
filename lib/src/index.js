"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const main_1 = require("./main");
const run = async () => {
    try {
        await main_1.runMain();
    }
    catch (e) {
        core_1.setFailed(e + "");
    }
};
run();
