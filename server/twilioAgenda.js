var Agenda = require('agenda');
var twilio = require('./twilio/twilio-api.js');

// Example agenda scheduling stuff https://github.com/rschmukler/agenda
var agenda = new Agenda({db: {address: "mongodb://127.0.0.1/agenda"}});

// Define a type of job - we can schedule these with their
// own unique data (passed to 'job.attrs.data') later
agenda.define('test', function(job, done) {
  console.log("Test successful", job.attrs.data);
  done();
});

agenda.define('twilio', function(job, done) {
  var options = job.attrs.data;
  twilio(options);
  console.log("Sms sent, here is the completed job info: ", job.attrs.data);
  done();
});

// Make sure agenda is connected to mongo
agenda.on('ready', function() {
  agenda.start();
});

var messageOptions = {
  clientName: 'Gloria',
  clientEvent: 'Birthday Party',
  clientNumber: '+16507131142' 
};

// Here's a demo of scheduling a job.
// 4 seconds after starting the server, let's
// schedule a job for the future. Say 5 seconds into the future.
setTimeout(function() {

	// period of time, job name, job data
	console.log("Scheduling a job!");
	agenda.schedule('in 5 seconds', 'test', {message: 'first'});


	var sixSecondsInTheFuture = new Date(Date.now() + 50000);

	// agenda.schedule('in 10 seconds', twilio, messageOptions);
	agenda.schedule('in 10 seconds', 'twilio', {clientName: 'Gloria', clientEvent: 'Birthday Party', clientNumber: '+16507131142'});

}, 4000);

