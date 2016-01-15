var accountKey = require('./amazon-api-key.js');
//var accountKey = process.env.AMAZON_API
var Amazon = require('amazon-product-api');
var _ = require('underscore');

exports.format = function(amazonObj) {
  return _.map(amazonObj, function(item) {
    return {
      title: item.ItemAttributes[0].Title[0],
      type: item.ItemAttributes[0].ProductGroup[0],
      price: '$' + item.OfferSummary[0].LowestNewPrice[0].Amount[0] / 100,
      imageUrl: item.SmallImage[0].URL[0],
      pageUrl: item.DetailPageURL[0]
    };
  })
};

exports.request = function(queryStr, callback){
  var client = Amazon.createClient({
    awsId: accountKey.ACCESS_KEY_ID,
    awsSecret: accountKey.SECRET_KEY,
    awsTag: accountKey.ASSOCIATE_TAG
  });

  client.itemSearch({
    keywords: queryStr,
    searchIndex: 'All',
    responseGroup: 'ItemAttributes,Offers,Images'
  }, callback);
};

//for testing purposes
//module.exports('Harry Potter', function() {});