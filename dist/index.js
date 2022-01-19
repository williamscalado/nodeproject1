"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
let user = "Williams";
let password = 132;
if ((0, function_1.valid)(user, password)) {
    console.log('next page');
}
else {
    console.log('User nor found');
}
