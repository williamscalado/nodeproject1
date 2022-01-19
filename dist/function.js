"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valid = void 0;
var md5 = require('md5');
// imaginando que esses dados seria recebido do Banco 
const Master = {
    Key: '4c1caad0b647a31d0ddf5c0521b6c1ea',
    Active: 1
};
const valid = (user, id) => {
    let Key = md5(user + id);
    if (Key === Master.Key && Master.Active === 1) {
        return true;
    }
    return false;
};
exports.valid = valid;
exports.default = { valid: exports.valid };
