angular.module('Bookings.controllers', []).
  controller('availController', function($scope, bookingsAPIservice) {
    $scope.nameFilter = null;
    $scope.availBookingsList = [];
    
    bookingsAPIservice.getAvailBookings().success(function (response) {
        //Dig into the respond to get the relevant data
        $scope.availBookingsList = response;
    });
}).
  
controller('bookedController', function($scope, bookingsAPIservice) {
    $scope.nameFilter = null;
    $scope.bookingsList = [];
    
    bookingsAPIservice.getBookings().success(function (response) {
        //Dig into the respond to get the relevant data
        $scope.bookingsList = response;
    });
});