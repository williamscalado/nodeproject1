"use strict";
// quando for importar tudo 
// import * as func  from './function'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = __importDefault(require("./function"));
let user = "Williams";
let id = 132;
console.log(function_1.default.valid("Williams", 1322));
