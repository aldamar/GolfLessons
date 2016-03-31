'use strict';

angular.module('BookingsApp', [
  'Bookings.controllers',
  'Bookings.services',
  'ngRoute'
])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
     when('/', {
        templateUrl: 'views/availableLessons.html',
        controller: 'availController'
      }).
     when('/bookings', {
        templateUrl: 'views/availableLessons.html',
        controller: 'availController'
      }).
      when('/bookings/:bookingId', {
        templateUrl: 'views/bookingForm.html',
        controller: 'availBookingDetailController'
      }).
      otherwise({
        redirectTo: '/'
      });
}])

.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from outer templates domain.
    'http://golflessons-aldamar.c9users.io/api/**'
  ]); 
});