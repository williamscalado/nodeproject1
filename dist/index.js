"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
const validator_1 = __importDefault(require("validator"));
let user = "Williams";
let password = 132;
let email = "williamscalado@gmail.com.br";
console.log(validator_1.default.isEmail(email));
if ((0, function_1.valid)(user, password)) {
    console.log('next page');
}
else {
    console.log('User nor found');
}
