'use strict';

// angular.module('BookingsApp', [
//   'Bookings.controllers',
//   'Bookings.services'
// ]);

angular.module('BookingsApp', [
  'Bookings.controllers',
  'Bookings.services'
])

.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from outer templates domain.
    'http://golflessons-aldamar.c9users.io/api/**'
  ]); 
});

