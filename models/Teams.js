var mongoose = require('mongoose');

var TeamsSchema = new mongoose.Schema({
  teamName: String,
  projectTitle: String,
  projectInfo : String,
  members: String,
});
module.exports = mongoose.model('Teams', TeamsSchema);
