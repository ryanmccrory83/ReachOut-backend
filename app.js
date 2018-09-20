const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const user = require('./routes/user');
//const routes for user routes?
// const id = require('./routes/user/:id');

app.use(cors());
app.use(bodyParser.json());

app.use('/user', user);

app.use('/user/:id', user);



module.exports = app;

