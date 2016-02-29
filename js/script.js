// APP
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.wanted_types = {
	  website: false,
	  app: false,
	  misc: false,
	};

	$scope.wanted_types_done = false;

	$scope.askMe = function() {
	  askMe();
	  console.log(3);
	};
});


// ANIMATIONS

setInterval(function() {
	$("#logo").parent().toggleClass("blur").toggleClass("shifted");
}, 2000);

setInterval(function() {
	$(".j1").toggleClass("messed_up");
}, 10000);

function conveyorLoop() {
	$('.j1').animate({
		'background-position-y': '+=102'
	}, 8000, 'linear', conveyorLoop);
};

function checkOutMyWork() {
	$('html, body').animate({
        scrollTop: $(".j2").offset().top
    }, 1000);
}

function askMe() {
	$('html, body').animate({
        scrollTop: $(".askMe").offset().top
    }, 1000);
}

$(".j1").toggleClass("messed_up"); conveyorLoop();