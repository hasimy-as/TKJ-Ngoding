const express = require('express');
const parser = require('body-parser');
const router = require('./routes/router');

const PORT = 8080;
var app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use('/', router);

app.listen(PORT, console.log(`connected to ${PORT}`));