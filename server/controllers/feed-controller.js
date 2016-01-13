'use strict';
var db = require('../../db');
var amazonApi = require('../helpers/amazon-api.js');
var bingApi = require('../helpers/bing-search-api.js');
var weatherApi = require('../helpers/weather-api.js');
var Client = require('../models').Client;
var moment = require('moment');
var getBirthdayMessage = require('../helpers/birthdateCalc.js');

var kelvinToFahrenheit = function(kelvin) {
  var fah = (kelvin - 273) * 1.8 + 32;
  return Math.floor(fah).toString();
};

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
      feedResults.bing = bingResults;
      module.exports.getWeather(zipcode, function(weatherResults) {
        weatherResults = JSON.parse(weatherResults);
        feedResults.weather = {
          temp: kelvinToFahrenheit(weatherResults.main.temp),
          name: weatherResults.name,
          description: weatherResults.weather[0].description,
          iconUrl: 'http://openweathermap.org/img/w/' + weatherResults.weather[0].icon + '.png'
        };
        module.exports.getAmazon(likes, function(amazonResults) {
          feedResults.amazon = amazonResults;
          // feedResults.message
          feedResults.message = params[0].client_name+"'s birthday is "+ getBirthdayMessage(params[0].client_birthday) +'! Think about '
          + 'how you can make their day special.'
          res.json(feedResults);
        });
      });
    });
  }
};