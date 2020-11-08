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

/*
// User 조회
router.get('/:id', function(req, res) {
  IndRegistration.findById(req.params.id, function (err, user) {
    if (err) return res.status(500).send("User 조회 실패");
    if (!user) return res.status(404).send("User 없음.");
    res.status(200).send(user);
  });
});
*/

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

module.exports = router;
