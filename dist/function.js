"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.valid = void 0;
function valid(user, id) {
    if (user === "Williams" && id === 132) {
        return true;
    }
    else {
        return "erro01";
    }
}
exports.valid = valid;
exports.version = 1.0;
exports.default = { valid, version: exports.version };
