"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function getAll(req, res, next) {
    res.send(data_1.persons);
    next();
}
exports.getAll = getAll;
