'use strict';
var _ = require('underscore');
var db = require('../../db');
var amazonApi = require('../helpers/amazon-api.js');
var bingApi = require('../helpers/bing-search-api.js');
var weatherApi = require('../helpers/weather-api.js');
var Client = require('../models').Client;
var moment = require('moment');
var getBirthdayMessage = require('../helpers/birthdateCalc.js');

// ---- Helpers to format data from APIs ----
var formatAmazon = function(amazonObj) {
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

var formatBing = function(bingObj) {
  return _.map(bingObj, function(item) {
    return {
      title: item.Title,
      description: item.Description
    };
  });
};

var formatWeather = function(weatherJson) {
  var kelvinToFahrenheit = function(kelvin) {
    var fah = (kelvin - 273) * 1.8 + 32;
    return Math.floor(fah).toString();
  };

  var weatherObj = JSON.parse(weatherJson);
  return {
    temp: kelvinToFahrenheit(weatherObj.main.temp),
    name: weatherObj.name,
    description: weatherObj.weather[0].description,
    iconUrl: 'http://openweathermap.org/img/w/' + weatherObj.weather[0].icon + '.png'
  };
};
// ---- end helpers ----

module.exports = {
  // FOR TESTING DELETE THIS LATER
  getOneClient: function(req,res){
    Client.getOne(req.params.client_id, function(result){ 
      module.exports.get(req,res, result,function(feedResult){
        res.json(feedResult);
      });
    });
  
  },
  
  getAmazon: function(likes, cb) {
    amazonApi(likes, function(result) {
      cb(result);
    });
  },

  getBing: function(company, cb){
  	bingApi(company, function(result){
  		cb(result.d.results);
  	});
  },

  getWeather: function(zipcode, cb){
    
  	weatherApi(zipcode, function(result){
      console.log('yeeeee')
  		cb(result);
  	});
  },

  get: function(req, res, params, callback) {
    //dummy value, while frontend for client's likes are not built out
    var likes = 'Beyonce';
    //
    var feedResults = {};
    var zipcode = params[0].client_zipcode;
    var company = params[0].client_company;
    module.exports.getBing(company, function(bingResults) {
      // console.log("bing results are:", bingResults);
      feedResults.bing = formatBing(bingResults);
      module.exports.getWeather(zipcode, function(weatherResults) {
        feedResults.weather = formatWeather(weatherResults);
        module.exports.getAmazon(likes, function(amazonResults) {
          feedResults.amazon = formatAmazon(amazonResults);

          // feedResults.message
          feedResults.message = params[0].client_name+"'s birthday is "+ getBirthdayMessage(params[0].client_birthday) +'! Think about '
          + 'how you can make their day special.'
          res.json(feedResults);
        });
      });
    });
  }
};