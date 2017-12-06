"use strict";
exports.__esModule = true;
var http_status_codes_1 = require("http-status-codes");
var restify_errors_1 = require("restify-errors");
var data_1 = require("./data");
function post(req, res, next) {
    if (!req.body.id || !req.body.firstName || !req.body.lastName || !req.body.email) {
        next(new restify_errors_1.BadRequestError('Missing mandatory member(s)'));
    }
    else {
        var newCustomerId = parseInt(req.body.id);
        if (!newCustomerId) {
            next(new restify_errors_1.BadRequestError('ID has to be a numeric value'));
        }
        else {
            var newCustomer = { id: newCustomerId,
                firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email };
            data_1.persons.push(newCustomer);
            res.send(http_status_codes_1.CREATED, newCustomer);
        }
    }
}
exports.post = post;
