"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const action_json_1 = __importDefault(require("../action.json"));
exports.accumulateInputs = () => {
    const accum = {};
    for (const [name, options] of Object.entries(action_json_1.default.inputs)) {
        accum[name] = core_1.getInput(name, options);
    }
    return accum;
};
