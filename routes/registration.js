var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Registration = require('../models/Registration');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Registration.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Registration.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE BOOK BY EMAIL */
router.get('/email', function(req, result, next) {
  var query = { email: req.params.email };
  Registration.findOne( function(err, post){
    if (err) return next(err);
    result.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Registration.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Registration.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Registration.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
