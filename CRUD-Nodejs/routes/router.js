"use strict";

const express = require('express');
const route = express.Router();

const db = require('../database/mysql');

route.get('/', (req, res) => {
  res.json({ 
    status: 200, 
    response: "OK", 
    message: "connected to server" 
  });
});

// 
route.get('/orang', (req, res) => {
  db.query('SELECT * from orang', (err, rows, fields) => {
    if (err) throw err;
    res.json({
      status: 200, 
      response: "OK",
      message: "data has been taken",
      data: rows 
    });
  });
});

// 
route.get('/orang/:id_akun', (req, res) => {
  var id_akun = req.params.id_akun;
  
  db.query('SELECT * FROM orang WHERE id_akun = ?', [id_akun], (err, rows, fields) => {
    if (err) throw err;
    res.json({
      status: 200,
      response: "OK",
      message: "single data taken",
      data: rows
    })
  });
});

// 
route.post('/orang', (req, res) => {
  let dataInput = {
  id_akun : req.body.id_akun,
  nama : req.body.nama,
  umur : req.body.umur,
  hobi : req.body.hobi
}

  db.query('INSERT INTO orang SET ?', dataInput, (err, rows, fields) => {
    if (err) throw err;
    console.log('masuk', rows)
    res.json({
      status: 200,
      response: "OK",
      message: "data inserted",
      result: rows
    });
  });
});

// 
route.put('/orang', (req, res) => {
  let updateData = {
  id_akun : req.body.id_akun,
  nama : req.body.nama,
  umur : req.body.umur,
  hobi : req.body.hobi
}

  db.query('UPDATE orang SET nama = ?, umur = ?, hobi = ?', updateData, (err, rows, fields) => {
    if (err) throw err;
    console.log('masuk', rows)
    res.json({
      status: 200,
      response: "OK",
      message: "data updated",
      result: rows
    });
  });
});

//
route.delete('/orang', (req, res) => {
  let id_akun = req.body.id_akun;

  db.query('DELETE FROM orang WHERE id_akun = ?', [id_akun], (err, rows, fields) => {
    if (err) throw err;
    console.log('masuk', rows)
    res.json({
      status: 200,
      response: "OK",
      message: "data deleted",
      result: rows
    });
  });
});

module.exports = route;