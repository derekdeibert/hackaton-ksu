var mongoose = require('mongoose');

var RegistrationSchema = new mongoose.Schema({
  firstName: String,
  lastName : String,
  email: String,
  password: String,
  sponsor: String});
module.exports = mongoose.model('Registration', RegistrationSchema);
