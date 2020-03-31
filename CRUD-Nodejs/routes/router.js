const express = require('express');
const route = express.Router();

const db = require('../database/mysql');

route.get('/', (req, res) => {
  res.json({ 
    "status": 200, 
    "response": "OK", 
    "message": "connected to server" 
  });
});

route.get('/orang', (req, res) => {
  db.query('SELECT * from orang', (err, rows, fields) => {
    if (err) throw err;
    res.json({
      "status": 200, 
      "message": "data has been taken",
      "data": rows 
    });
  });
});

module.exports = route;