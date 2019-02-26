$(document).ready(function() {
// Peloader
setTimeout(function(){
	$('body').addClass('loaded');
}, 500);
//Sticky Nav
$(".cripto_nav").sticky({topSpacing:0});
// Faq Tab
$('#faq-area  .accordion-single .panel-heading').on('click', function(e){
  $('#faq-area  .accordion-single .panel-heading').removeClass("active");
  $(this).addClass("active");
});
//Animate, WOW
if($(window).width() >= 992){
  new WOW().init();
}
//Owl Carousel
$("#team_01").owlCarousel({
  items :3,
  itemsDesktop : [1199, 3],
  itemsDesktopSmall : [980, 3],
  itemsTablet: [768, 2],
  itemsMobile : [479, 1],
  navigation : false,
  pagination: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  afterAction: function(el){

   this
   .$owlItems
   .removeClass('active')


   this
   .$owlItems
   .eq(this.currentItem + 1)
   .addClass('active')    
 } 
});
//Smoth scroll
    $("nav a").on('click', function(event) {
      if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
       var hash = this.hash;

       $('html, body').animate({
       scrollTop: $(hash).offset().top
       }, 1500, function(){
       window.location.hash = hash;
       });
      } // End if
    });
});