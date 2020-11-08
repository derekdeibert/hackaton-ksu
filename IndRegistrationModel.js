
var mongoose = require('mongoose');
var IndSchema = new mongoose.Schema({
  firstName: String,
  lastName : String,
  email: String,
  password: String,
  sponsor: String,
  ksuId: String,
  teamName: String,
  teamSponsor: String,
  projectDescription: String,
  teamMember1: String,
  teamMember2: String,
  teamMember3: String,
  teamMember4: String
}, { collection: 'registrations' })

mongoose.model('IndRegistration', IndSchema);
module.exports = mongoose.model('IndRegistration');
