angular.module('Bookings.controllers', []).
  controller('availController', function($scope, bookingsAPIservice) {
    $scope.nameFilter = null;
    $scope.availBookingsList = [];
    
    bookingsAPIservice.getAvailBookings().success(function (response) {
        //Dig into the respond to get the relevant data
        $scope.availBookingsList = response;
        $scope.$broadcast("bookings_done");
    });
}).
  
controller('bookedController', function($scope, bookingsAPIservice) {
    $scope.nameFilter = null;
    $scope.bookingsList = [];
    
    bookingsAPIservice.getBookings().success(function (response) {
        //Dig into the respond to get the relevant data
        $scope.bookingsList = response;
        $scope.$broadcast("bookings_done");
    });
}).

directive('mixitup',function($timeout){
    var linker = function(scope,element,attrs) {

            scope.$on("cat_done", function(){ 
                $timeout(function(){
                console.log('reload');
                console.log("!================ ");
                element.mixItUp({
                	callbacks: {
                		onMixFail: function(state){	console.log('No elements found matching ',state); },
                		onMixStart: function(state, futureState){ console.log('Animation starting',state); }
                	}
                });
                //do the things
                 console.log('do the things');
                });
            });

        console.log('starting id ' + element.attr('id'));
        console.log('starting class ' + element.attr('class'));
        
        var filterList = {

            init: function () {

                // MixItUp plugin
                // http://mixitup.io
                element.mixitup({
                    targetSelector: '.portfolio',
                    filterSelector: '.filter',
                    effects: ['fade'],
                    easing: 'snap',
                    // call the hover effect
                    onMixEnd: filterList.hoverEffect()
                });

            },

            hoverEffect: function () {
                $("[rel='tooltip']").tooltip();
                // Simple parallax effect
                //element.children("#portfoliolist .portfolio .portfolio-hover").hover(
                  element.hover(
                    function(){
                        $(this).find('.image-caption').slideDown(250); //.fadeIn(250)
                    },
                    function(){
                        $(this).find('.image-caption').slideUp(250); //.fadeOut(205)
                    }
            );

            }

        };

        // Run the show!
        filterList.init();
        
        console.log("run the show");
        
    };
    
    return {
        restrict:'A',
        link: linker
    };
});
