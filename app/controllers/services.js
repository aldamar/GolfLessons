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
    
    bookingsAPI.getBookingDetails = function(bookingId) {
      return $http({
        method: 'JSONP', 
        url: 'http://golflessons-aldamar.c9users.io/api/availGolfLesson/'+ bookingId +'?callback=JSON_CALLBACK',
        dataType: 'jsonp'
      });
    }
    
    bookingsAPI.deleteBooking = function(bookingId) {
      return $http({
        method: 'JSONP', 
        url: 'http://golflessons-aldamar.c9users.io/api/deleteBooking/'+ bookingId +'?callback=JSON_CALLBACK',
        dataType: 'jsonp'
      });
    }
    
    
    bookingsAPI.updateBooking = function(bookingId, formData) {
      return $http({
          method  : 'JSONP',
          datatype: "jsonp",
          url     : 'http://golflessons-aldamar.c9users.io/api/updateBooking/'+ bookingId +'?callback=JSON_CALLBACK',
          params  : formData, // pass in data as strings
          headers : { 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '**', 'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS', 'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token' }  // set the headers so angular passing info as form data (not request payload)
      });
    }
    
    
//     $scope.processForm = function() {
//   $http({
//   method  : 'POST',
//   url     : 'process.php',
//   data    : $.param($scope.formData),  // pass in data as strings
//   headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
// })
//   .success(function(data) {
//     console.log(data);

//     if (!data.success) {
//       // if not successful, bind errors to error variables
//       $scope.errorName = data.errors.name;
//       $scope.errorSuperhero = data.errors.superheroAlias;
//     } else {
//       // if successful, bind success message to message
//       $scope.message = data.message;
//     }
//   });
// };
        
    return bookingsAPI;
  });