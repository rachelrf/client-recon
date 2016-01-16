var accountKey = require('./weather-api-key.js');
// var accountKey = process.env.OPEN_WEATHER_ACCOUNT_KEY;
var request = require('request');

exports.format = function(weatherJson) {
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

exports.request = function(zipCode, callback){
  zipCode = zipCode || '94303';
	request('http://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',us&&APPID=' + accountKey, function (error, response, body) {
      if (!error && response.statusCode == 200) {
	        callback(body); // Show the HTML for the Modulus homepage.
	    }
	});
}