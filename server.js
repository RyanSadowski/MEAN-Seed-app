// Get dependencies
const express         = require('express');
const path            = require('path');
const http            = require('http');
const bodyParser      = require('body-parser');
const morgan          = require('morgan');
const mongoose        = require('mongoose');
const jwt             = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config          = require('./server/config'); // get our config file
const cors            = require('cors')



// Get our API routes
const api = require('./server/routes/api');

const app = express();
app.use(cors())
// Get config file
mongoose.connect(process.env.MONGODB_URI || config.database);
app.set('superSecret', config.secret);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// use morgan to log requests to the console
app.use(morgan('dev'));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = (process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = app;
