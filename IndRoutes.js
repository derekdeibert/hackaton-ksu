var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended:true }));
var IndRegistration = require('./IndRegistrationModel');

// User 생성
router.post('/', function(req, res) {
  console.log(req.body);
  IndRegistration.create( {
      type: req.body.type,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      sponsor: req.body.sponsor,
      ksuId: req.body.ksuId,
      teamName: req.body.teamName,
      teamSponsor: req.body.teamSponsor,
      projectDescription: req.body.projectDescription,
      teamMember1: req.body.teamMember1,
      teamMember2: req.body.teamMember2,
      teamMember3: req.body.teamMember3,
      teamMember4: req.body.teamMember4
    },
    function(err, user) {
      if (err) return res.status(500).send("There was an error with posting.");
      res.status(200).send(user);
    });
});

//Return all registrations from DB
router.get('/all', function(req, res) {
  IndRegistration.find( {}, function(err, users) {
    if (err) return res.status(500).send("There was an error with getting data");
    res.status(200).send(users);
  });
});

// Delete Invidual Registration by KSU ID
router.delete('/delete/:ksuId', function (req, res) {
  IndRegistration.findOneAndDelete({ ksuId: req.params.ksuId}, function (err, user) {
    if (err) return res.status(500).send("Error deleting user with KSU ID "+req.params.ksuId);
    res.status(200).send("User with KSU ID "+req.params.ksuId+" successfully deleted.");
  });
});

// Update Individual Registration by KSU ID
router.put('/update/:ksuId', function (req, res) {
  IndRegistration.findOneAndUpdate({ ksuId: req.params.ksuId}, {$set: req.body},
    {new: true}, function (err, user) {
    if (err) return res.status(500).send("Error updating user registration with KSU ID "+req.params.ksuId);
    res.status(200).send(user);
  });
});

//Update Team Reg
router.put('/update/team/:teamName', function (req, res) {
  IndRegistration.findOneAndUpdate({ teamName: req.params.teamName}, {$set: req.body},
    {new: true}, function (err, user) {
      if (err) return res.status(500).send("Error updating user registration with Team Name "+req.params.teamName);
      res.status(200).send(user);
    });
});

// Find Registration by KSU ID
router.get('/getByKsuId/:ksuId', function (req, res) {
  IndRegistration.find({ ksuId: req.params.ksuId}, req.body, {new: true}, function (err, user) {
    if (err) return res.status(500).send("There was an error getting the registration for that password.");
    res.status(200).send(user);
  });
});

router.post('/create',(req, res, next) => {
  IndRegistration.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

//get password
router.get('/getPassword/:ksuId', function (req, res) {
  IndRegistration.find({ ksuId: req.params.ksuId}, req.body, {new: true}, function (err, data) {
    if (err) return res.status(500).send("There was an error getting the registration for that password.");
    res.status(200).send(data);
  });
});

//delete by team name
router.delete('/deleteByTeam/:teamName', function (req, res) {
  IndRegistration.findOneAndDelete({ teamName: req.params.teamName}, function (err, user) {
    if (err) return res.status(500).send("Error deleting user with Team Name "+req.params.teamName);
    res.status(200).send("User with KSU ID "+req.params.teamName+" successfully deleted.");
  });
});

router.get('/getTeamReg/:teamName', function (req, res) {
  IndRegistration.find({ teamName: req.params.teamName}, req.body, {new: true}, function (err, data) {
    if (err) return res.status(500).send("There was an error getting the registration for that team name.");
    res.status(200).send(data);
  });
});

// get all teams
router.get('/getAllTeams',function (req, res) {
  IndRegistration.find({ teamName: {$exists:true }}, req.body, {new: true}, function (err, data) {
    if (err) return res.status(500).send("There was an error getting the registration for that team name.");
    res.status(200).send(data);
  });
});

module.exports = router;
