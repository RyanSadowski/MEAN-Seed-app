const express         = require('express');
const apiRoutes       = express.Router();
const User            = require('../modules/user'); // get our mongoose model
const jwt             = require('jsonwebtoken')
const config          = require('../config');
const app             = express();


app.set('superSecret', config.secret);
/* GET api listing. */
apiRoutes.get('/', (req, res) => {
  res.send('api is running');
});

apiRoutes.post('/setup', function(req, res) {
  // create a sample user
  var user = new User({
    username: req.body.username,
    password: req.body.password,
    admin: req.body.admin
  });
  // save the sample user
  user.save(function(err) {
    if (err) {
      res.json ({error: err});
    }else{
    console.log('User saved successfully');
    res.json({ success: true });
  }
  });
});

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/auth', function(req, res) {

  // find the user
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: 18000 // expires in 60*5 minutes
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }
    }
  });
});


// route middleware to verify a token
apiRoutes.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err) {
        //console.log(err);
        console.log(app.get('superSecret'));
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
});

/*=========================
NEED A TOKEN FOR ANYTHING AFTER THIS COMMENT
==========================*/

apiRoutes.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});




module.exports = apiRoutes;
