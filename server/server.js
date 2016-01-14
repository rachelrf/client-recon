var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var GoogleStrategy = require('passport-google-auth').OAuth2Strategy;

var app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Allow cross origin requests;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

//Set up routes
require('./routes/index.js')(app, express);


//Set up static files
app.use(express.static(path.join(__dirname ,'../client')));

// Set up ports
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Server listening on port ' + port);
});

module.exports = app;

