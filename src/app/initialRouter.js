'use strict';

// require express
const express = require('express');

// require bodyParser
const bodyParser = require('body-parser');

// use jsonParser: gives access to the request body
const jsonParser = bodyParser.json();

// use express router for modular routes
const router = express.Router();

// bring in some model


// HTTP Status Codes:
// 200 OK
// 201 Created
// 204 No content to respond with
// 202 Accepted
// 400 Bad request

// GET
router.get('/', (request, response) => {
});

// POST
router.post('/', jsonParser, (request, response) => {
});

// PUT
router.put('/:id', jsonParser, (request, response) => {
});

// DELETE
router.delete('/:id', (request, response) => {
});

module.exports = router;