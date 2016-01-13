'use strict';

// var moment = require('moment');
// var rp = require('request-promise');

// var appId = process.env.TWILLIO_SID;
// var pass = process.env.TWILLIO_AUTH_TOKEN;
// var fromNumber = process.env.TWILLIO_PHONE_NUMBER;
// var toNumber = process.env.TWILLIO_TEST_NUMBER;


var messageOptions = {
  clientName: 'Gloria',
  clientEvent: 'Birthday Party',
  clientNumber: '+16507131142' 
};
//////////////////////
// http://twilio.github.io/twilio-node/?utm_source=blog&utm_medium=link&utm_campaign=sms-4-lines-april-2014

function sendMessage (options) {
  // var date = moment(opts.eventDate).year(moment(Date.now()).year()).fromNow();

  var message = 'This is a reminder that ' + options.clientName + '\'s ' //add event
  + options.clientEvent +' event is tomorrow! Check out our suggested gifts for them in the Rappo.rt app :)';
  

  client.sendMessage({
      to: options.clientNumber,
      from:'+16502763574', // Twilio number
      body: message
  }, function(err, result) {
      if (err) {
          console.log('Error sending SMS reminder', err);
      } 
      console.log('SMS to ' + options.clientName + ' send successfully!'); // result.body should equal message
  });

}

module.exports = sendMessage;

/////////////////////////////////
// Code for sending Twilio sms //
/////////////////////////////////


// var twilio = require('../../api/twilio-api.js');

// hard coded for testing
// var messageOptions = {
//   clientName: 'Gloria',
//   clientEvent: 'Birthday Party',
//   clientNumber: '+16507131142' 
// };
// twilio(messageOptions);






