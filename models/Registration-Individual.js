const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let RegistrationIndividual = new Schema({
  firstName: String,
  lastName : String,
  email: String,
  password: String,
  sponsor: String,
  ksuId: String
});

module.exports = mongoose.model('RegistrationIndividual', RegistrationIndividual)
