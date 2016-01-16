var accountKey = require('./bing-search-api-key.js')
// var accountKey = process.env.BING_NEWS_API
var Bing = require('node-bing-api')({ accKey: accountKey });
var _ = require('underscore');

exports.format = function(bingObj) {
  return _.map(bingObj.d.results, function(item) {
    return {
      title: item.Title,
      description: item.Description,
      link: item
    };
  });
};

exports.request = function(queryStr, callback){
	Bing.news(queryStr, {
	    top: 5,  // Number of results (max 15)
	    newsSortBy: "Date", //Choices are: Date, Relevance
	    //newsCategory: "rt_Business" // Choices are:
	                                //   rt_Business
	                                //   rt_Entertainment
	                                //   rt_Health
	                                //   rt_Politics
	                                //   rt_Sports
	                                //   rt_US
	                                //   rt_World
	                                //   rt_ScienceAndTechnology
	    // newsLocationOverride: "US.WA" // Only for en-US market
	  }, function(error, res, body){
	  	if(error){
	  		console.log('Bing Error',error)
	  	} else {
	  		callback(body);
	  	}
	  });
}