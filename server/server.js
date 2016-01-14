var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var User = require('controllers/user-controller.js');


/* ============= GOOGLE AUTHENTICATION & PASSPORT CONFIG ================= */
var passport = require('passport');
var GoogleStrategy = require('passport-google-auth').OAuth2Strategy;

// GOOGLE CREDENTIALS
var GOOGLE_CLIENT_ID = "615669438819-m1ilq060a5u3grritkida3edigottqa0.apps.googleusercontent.com";
var GOOGLE_CLIENT_SECRET = "EF8r-qDLn-4LQ0UnuYwJ9aKs";

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
	
});

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/login-verify"
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));


/* ==================== MIDDLEWARE ================== */
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

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

