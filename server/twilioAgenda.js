var Agenda = require('agenda');
var twilio = require('./twilio/twilio-api.js');

module.exports = function(date, userPhoneNumber, friendName, eventName) {

  var date = '2016-01-15';
  var phoneNumber = '+16507131142';

  // agenda scheduling stuff https://github.com/rschmukler/agenda
  var agenda = new Agenda({db: {address: "mongodb://127.0.0.1/agenda"}});

  agenda.define('twilio', function(job, done) {
    var options = job.attrs.data;
    twilio(options);
    console.log("Sms sent, here is the completed job info: ", job.attrs.data);
    done();
  });

  // parse date

  var dateFormatted = new Date(date);
  var now = new Date();
  var timeInMilliseconds = dateFormatted - now; 
  // var timeInSeconds = Math.floor(timeInMilliseconds/1000); 
  var timeInSeconds = Math.floor(timeInMilliseconds/1000) - 86400; // 86400 is number of seconds in a day
  console.log('time', timeInSeconds);

  // Make sure agenda is connected to mongo
  agenda.on('ready', function() {
    agenda.start();
    agenda.schedule('in ' + timeInSeconds + ' seconds', 'twilio', {clientName: clientName, clientEvent: eventName, clientNumber: userPhoneNumber});
  });

};

// module.exports('2016-01-15', '+16507131142', 'Greg', 'Legacy Party');
