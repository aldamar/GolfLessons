'use strict';

angular.module('BookingsApp', [
  'Bookings.controllers',
  'Bookings.services',
  'ngRoute'
])

.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://golflessons-aldamar.c9users.io/api/**',
    'http://golflessons-aldamar.c9users.io/**'
    
  ]);

})

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    // when('/', {
    //     templateUrl: 'views/availableLessons.html',
    //     controller: 'availController'
    //   }).
     when('/bookings', {
        templateUrl: 'views/availableLessons.html',
        controller: 'availController'
      }).
      when('/bookings/:bookingId', {
        templateUrl: 'views/bookingForm.html',
        controller: 'availBookingDetailController'
      }).
      when('/bookings/:bookingId/success', {
        templateUrl: 'views/success.html',
        controller: 'availBookingDetailController'
      }).
      when('/deleteBooking/:bookingId', {
        templateUrl: 'views/deleted.html',
        controller: 'deleteBookingController'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);