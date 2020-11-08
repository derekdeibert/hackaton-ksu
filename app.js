
const CONNECTION_URL_IND = 'mongodb+srv://user3:user3pass@cluster0.c0jpb.mongodb.net/registration?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var path = require('path');
const mongoDBInd = process.env.MONGODB_URI || CONNECTION_URL_IND;

mongoose.connect(mongoDBInd);
mongoose.Promise = global.Promise;
const dbInd = mongoose.connection;
dbInd.on('error', console.error.bind(console, 'MongoDB Ind connection error:'));
const express = require('express')
const indReg = require('./IndRoutes'); //imports routes

const app = express()
const port = process.env.port || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/reg', indReg);
app.use(express.static(path.join(__dirname, 'dist/hackaton-ksu')));
app.use('/', express.static(path.join(__dirname, 'dist/hackaton-ksu')));

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});
