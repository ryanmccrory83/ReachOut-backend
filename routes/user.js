const express = require('express');
const router = express.Router();

const queries = require('../database/queries');

router.get('/', (request, response, next) => {
    queries.listUsers()
    .then(user => {
        response.json({user});
        console.log('this is user route')
    })
    .catch(next);
});

router.get('/:id', (request, response, next) => {
    queries.getUserById(request.params.id)
    .then(user => {
        response.json({user});
    })
    .catch(next);
});

module.exports = router;