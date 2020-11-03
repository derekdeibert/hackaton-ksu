const express = require('express');
const app = express();
const router = express.Router();

let Team = require('../models/Registration-Team');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Team.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Team.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE BOOK BY EMAIL */
router.get('/email', function(req, result, next) {
  var query = { email: req.params.email };
  Team.findOne( function(err, post){
    if (err) return next(err);
    result.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Team.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Team.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Team.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
