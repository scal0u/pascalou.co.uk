// APP
var app = angular.module('myApp', ["firebase"]);

app.controller('myCtrl', function($scope, $firebaseArray) {

	$scope.wanted_types = {
	  website: false,
	  app: false,
	  misc: false,
	};

	$scope.wanted_types_done = false;

	$scope.askMe = function() {
	  askMe();
	};

	var ref = new Firebase("https://pascalou.firebaseio.com/messages");
	// create a synchronized array
	$scope.messages = $firebaseArray(ref);
	// add new items to the array
	// the message is automatically added to our Firebase database!
	$scope.addMessage = function() {
		var date = new Date().toString();
		$scope.messages.$add({
			wanted_types: $scope.wanted_types,
			description: $scope.description,
			user: $scope.user,
			date: date,
		});
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
    setTimeout(function() {
	    $(".thank-you .img-responsive").toggleClass("turned");
    }, 1000);
}

$(".j1").toggleClass("messed_up"); conveyorLoop();