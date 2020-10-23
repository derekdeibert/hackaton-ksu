var mongoose = require('mongoose');

var TeamsSchema = new mongoose.Schema({
  teamName: String,
  teamSponsor: String,
  projectDescription: String,
  teamMember1: String,
  teamMember2: String,
  teamMember3: String,
  teamMember4: String
});
module.exports = mongoose.model('Teams', TeamsSchema);
