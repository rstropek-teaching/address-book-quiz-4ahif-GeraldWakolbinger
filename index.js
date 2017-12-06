"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = require("restify");
const delete_single_1 = require("./delete-single");
const get_all_1 = require("./get-all");
const post_1 = require("./post");
var server = restify_1.createServer();
// Add bodyParser plugin for parsing JSON in request body
server.use(restify_1.plugins.bodyParser());
// Add routes
server.get('/api/contacts', get_all_1.getAll);
server.post('/api/contacts', post_1.post);
server.del('/api/contacts/:id', delete_single_1.deleteSingle);
server.listen(8080, () => console.log('API is listening'));
