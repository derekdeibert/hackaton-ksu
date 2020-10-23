var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var apiRouterRegistration = require('./routes/registration');
var apiRouterTeam = require('./routes/team')
var app = express();
var appTeam = express();
var mongooseTeam = require('mongoose');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user3:user3pass@cluster0.c0jpb.mongodb.net/registration?retryWrites=true&w=majority', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/hackaton-ksu')));
app.use('/', express.static(path.join(__dirname, 'dist/hackaton-ksu')));
app.use('/api', apiRouterRegistration);
app.use('/', apiRouterRegistration);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});
mongoose.co
//Team DB

mongooseTeam.createConnection('mongodb+srv://user3:user3pass@cluster0.c0jpb.mongodb.net/team?retryWrites=true&w=majority', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

appTeam.use(logger('dev'));
appTeam.use(express.json());
appTeam.use(express.urlencoded({ extended: false }));
appTeam.use(express.static(path.join(__dirname, 'dist/hackaton-ksu')));
appTeam.use('/', express.static(path.join(__dirname, 'dist/hackaton-ksu')));
appTeam.use('/apiTeam', apiRouterTeam);
appTeam.use('/', apiRouterTeam);

// catch 404 and forward to error handler
appTeam.use(function(req, res, next) {
  next(createError(404));
});

// error handler
appTeam.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});



module.exports = app;
module.exports = appTeam;

