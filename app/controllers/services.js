angular.module('Bookings.services', []).
  factory('bookingsAPIservice', function($http) {

    var bookingsAPI = {};

    bookingsAPI.getAvailBookings = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://golflessons-aldamar.c9users.io/api/availGolfLesson?callback=JSON_CALLBACK',
        dataType: 'jsonp'
      });
    }
    
    bookingsAPI.getBookings = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://golflessons-aldamar.c9users.io/api/bookedGolfLesson?callback=JSON_CALLBACK',
        dataType: 'jsonp'
      });
    }
        
    return bookingsAPI;
  });