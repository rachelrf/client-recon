var accountKey = require('./amazon-api-key.js');
//var accountKey = process.env.AMAZON_API
var amazon = require('amazon-product-api');

module.exports = function(queryStr, callback){
  var client = amazon.createClient({
    awsId: accountKey.ACCESS_KEY_ID,
    awsSecret: accountKey.SECRET_KEY,
    awsTag: accountKey.ASSOCIATE_TAG
  });

  client.itemSearch({
    keywords: queryStr,
    searchIndex: 'All',
    responseGroup: 'ItemAttributes,Offers,Images'
  }, function(err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
      callback(results);
    }
  });
};

//for testing purposes
//module.exports('Harry Potter', function() {});