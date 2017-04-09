$(document).ready(function() {
 
  $(".two-slide-carousel").owlCarousel({
 
      autoPlay: 5000,
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
	  itemsTablet :	[768,1],
	  itemsMobile :	[479,1],
	  paginationSpeed:	2300,
	  slideSpeed:	400,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
 
  });
 
})