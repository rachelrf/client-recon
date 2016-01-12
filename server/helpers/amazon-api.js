var accountKey = require('../../keys.js')
//var accountKey = process.env.BING_NEWS_API
var amazon = require('amazon-product-api');

module.exports = function(queryStr, callback){
  var client = amazon.createClient({
    awsId: accountKey.AMAZON_ACCESS_KEY_ID,
    awsSecret: accountKey.AMAZON_SECRET_KEY,
    awsTag: accountKey.AMAZON_ASSOCIATE_TAG
  });

  client.itemSearch({
    director: 'Quentin Tarantino',
    actor: 'Samuel L. Jackson',
    searchIndex: 'DVD',
    audienceRating: 'R',
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
module.exports(null, function() {});