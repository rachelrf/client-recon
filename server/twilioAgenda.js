var Agenda = require('agenda');
var twilio = require('./twilio/twilio-api.js');

module.exports = function(date, phoneNumber) {


  // agenda scheduling stuff https://github.com/rschmukler/agenda
  var agenda = new Agenda({db: {address: "mongodb://127.0.0.1/agenda"}});

  // Define a type of job - we can schedule these with their
  // own unique data (passed to 'job.attrs.data') later
  // agenda.define('test', function(job, done) {
  //   console.log("Test successful", job.attrs.data);
  //   done();
  // });

  agenda.define('twilio', function(job, done) {
    var options = job.attrs.data;
    twilio(options);
    console.log("Sms sent, here is the completed job info: ", job.attrs.data);
    done();
  });

  var messageOptions = {
    clientName: 'Gloria',
    clientEvent: 'Birthday Party',
    clientNumber: '+16507131142' 
  };
  // Make sure agenda is connected to mongo
  agenda.on('ready', function() {
    agenda.start();
    agenda.schedule('in 2 seconds', 'twilio', {clientName: messageOptions.clientName, clientEvent: messageOptions.clientEvent, clientNumber: messageOptions.clientNumber});
  });

};

