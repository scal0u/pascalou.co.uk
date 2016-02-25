setInterval(function() {

	$("#logo").parent().toggleClass("blur").toggleClass("shifted");

}, 2000);


setInterval(function() {

	$(".j1").toggleClass("messed_up");

}, 10000);


function checkOutMyWork() {
	$('html, body').animate({
        scrollTop: $(".j2").offset().top
    }, 1000);
}