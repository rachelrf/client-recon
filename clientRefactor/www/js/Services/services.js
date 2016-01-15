angular.module('starter.services', [])
.service('FriendsService', function() {

  this.friends = [
      {
      id: 1,
      img: "/img/rachel.jpg",
      name: "Rachel RoseFigura",
      email: "rachel@gmail.com",
      phone: "650-713-1142"
      },
      {
      id: 2,
      img: "/img/gloria.jpg",
      name: "Gloria Ma",
      email: "gloria@gmail.com",
      phone: "214-421-1112"
      },
      {
      id: 3,
      img: "/img/max.jpg",
      name: "Max O'Connell",
      email: "max@gmail.com",
      phone: "609-838-2212"
      },
      {
      id: 4,
      img: "/img/greg.jpg",
      name: "Greg Domorski",
      email: "greg.domorski@gmail.com",
      phone: "908-601-6910"
      }
    ];



    this.getFriend = function (id) {
      for (var i = 0; i < this.friends.length; i++) {
        var entry = this.friends[i];
        if (entry.id === parseInt(id)) {
          return entry;
        }
      }
      return null;
    };

    this.getPosts = function(friendId) {  
      return $http({
        method: 'GET',
        url: '/api/clients/:' + friendId + '/posts'
      })
      .then(function (resp) {
        return resp.data;
      });


    };

});
