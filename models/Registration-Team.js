const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let RegistrationTeam = new Schema({
  teamName: String,
  teamSponsor: String,
  projectDescription: String,
  teamMember1: String,
  teamMember2: String,
  teamMember3: String,
  teamMember4: String
});

module.exports = mongoose.model('RegistrationTeam', RegistrationTeam)
