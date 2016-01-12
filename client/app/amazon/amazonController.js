angular.module('Amazon', [])
.factory('AmazonAPI', function($http) {
  var getProducts = function(keywords) {
    var url = '';
    var data = '';
    return $http.get(url, data);
  };

  return {
    getProducts: getProducts
  }
})
.controller('AmazonController', function($scope) {
  
});