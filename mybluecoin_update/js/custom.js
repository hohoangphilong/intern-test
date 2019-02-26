// Sticky Nav
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
	if (window.pageYOffset - 20 >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

//Language dropdown
console.clear();

var el = {};

$('.placeholder').on('click', function (ev) {
	$('.placeholder').css('opacity', '0');
	$('.list__ul').toggle();
});

$('.list__ul a').on('click', function (ev) {
	ev.preventDefault();
	var index = $(this).parent().index();

	$('.placeholder').text( $(this).text() ).css('opacity', '1');

	console.log($('.list__ul').find('li').eq(index).html());

	$('.list__ul').find('li').eq(index).prependTo('.list__ul');
	$('.list__ul').toggle();   

});

 //Countdown Timer

 var countDownDate = new Date("May 5, 2019 15:37:25").getTime();
 var x = setInterval(function() {

 	var now = new Date().getTime();

 	var distance = countDownDate - now;

 	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 	document.getElementById("days").innerHTML = days;
 	document.getElementById("hours").innerHTML = hours;
 	document.getElementById("minutes").innerHTML = minutes;
 	document.getElementById("seconds").innerHTML = seconds;

  // If the count down is over
  if (distance < 0) {
  	clearInterval(x);
  	document.getElementById("").innerHTML = "EXPIRED";
  }
}, 1000);

