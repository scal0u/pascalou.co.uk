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
    window.parent.document.body.style.zoom = 1.0;
}