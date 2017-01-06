const express = require('express');
const apiRoutes = express.Router();
const User = require('../modules/user'); // get our mongoose model
const jwt = require('jsonwebtoken')
const config = require('../config');
//const bcrypt         = require("bcrypt");
const app = express();


app.set('superSecret', config.secret);
/* GET api listing. */
apiRoutes.get('/', (req, res) => {
  res.send('api is running');
});

apiRoutes.post('/setup', function(req, res) {
  // create a sample user
  var user = new User({
    username: req.body.username,
    //password: bcrypt.hashSync(req.body.password, 10),
    password: req.body.password,
    admin: req.body.admin
  });
  // save the sample user
  user.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: "an error occured",
        error: err
      })
    } else {
      res.status(201).json({
        success: true,
        obj: result,
        body: "success, user registered"
      });
    }
  });
});

apiRoutes.post('/auth', function(req, res) {
  console.log(req.body);
  // find the user
  User.findOne({
    username: req.body.username
  }, function(err, user) {

    if (err) {
      return res.status(500).json({
        title: 'An error occured!',
        error: err
      });
    }
    //user not found in db
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication failed'
      });
    } else if (user) {
      // check if password matches
      // if (!bcrypt.compareSync(req.body.password, user.password)) {
      //   res.status(401).json({
      //     success: false,
      //     message: 'Authentication failed.'
      //   });
      // }
      if (user.password != req.body.password) {
        return res.status(500).json({
          success: false,
          message: 'Authentication failed.'
        });
      } else {
        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: 18000 // expires in 60*5 minutes
        });

        // return the information including token as JSON
        res.status(201).json({
          success: true,
          message: 'Enjoy your token!',
          username: user.username,
          userId: user._id,
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
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
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

apiRoutes.post('/user', function(req, res) {
  console.log(req.body);
  // find the user
  User.findOne({
    username: req.body.username
  }, function(err, user) {

    if (err) {
      return res.status(500).json({
        title: 'An error occured!',
        error: err
      });
    }
    //user not found in db
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Why are you not a user?'
      });
    } else if (user) {
      res.status(201).json({
        success: true,
        user: user
      });
    }
  });
});

apiRoutes.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});




module.exports = apiRoutes;
