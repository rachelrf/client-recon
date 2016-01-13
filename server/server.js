var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Agenda = require('agenda');


var app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set up routes
require('./routes/index.js')(app, express);


//Set up static files
app.use(express.static(path.join(__dirname ,'../client')));

// Set up ports
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Server listening on port ' + port);
});


// Example agenda scheduling stuff https://github.com/rschmukler/agenda
var agenda = new Agenda({db: {address: "mongodb://127.0.0.1/agenda"}});

// Define a type of job - we can schedule these with their
// own unique data (passed to 'job.attrs.data') later
agenda.define('send_twilio_text', function(job, done) {
  console.log("Running job.");
  console.log("Here is the job info: ", job.attrs.data);
  console.log("Would send text here");
  done();
});

// Make sure agenda is connected to mongo
agenda.on('ready', function() {
  agenda.start();
});


// Here's a demo of scheduling a job.
// 4 seconds after starting the server, let's
// schedule a job for the future. Say 5 seconds into the future.
setTimeout(function() {

	// period of time, job name, job data
	console.log("Scheduling a job!");
	agenda.schedule('in 5 seconds', 'send_twilio_text', {message: "Hi!", phoneNumber: '+16506468235'});


	var sixSecondsInTheFuture = new Date(Date.now() + 6000);

	agenda.schedule(sixSecondsInTheFuture, 'send_twilio_text', {message: "Further future!", sentiment: "Smile"});



}, 4000);

module.exports = app;
