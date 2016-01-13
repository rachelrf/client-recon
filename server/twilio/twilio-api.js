'use strict';

var accountKey = require('../helpers/twilio-api-key.js');
var client = require('twilio')(accountKey.ACCOUNT_SID, accountKey.AUTH_TOKEN);

// http://twilio.github.io/twilio-node/?utm_source=blog&utm_medium=link&utm_campaign=sms-4-lines-april-2014
function sendMessage (options) {

  var message = 'This is a reminder that ' + options.clientName + '\'s ' 
  + options.clientEvent +' event is tomorrow! Check out our suggested gifts for them in the Rappo.rt app :)';
  

  client.sendMessage({
      to: options.clientNumber,
      from:'+16502763574', // Twilio number
      body: message
  }, function(err, result) {
      if (err) {
          console.log('Error sending SMS reminder', err);
      } 
      console.log('SMS to ' + options.clientName + ' send successfully!'); 
  });

}

module.exports = sendMessage;








