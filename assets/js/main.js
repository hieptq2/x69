$(document).ready(function(){
  $('.x69-icon-slider .icon-slider-row').slick({
  	autoplay: true,
  	autoplaySpeed: 2500,
  	arrows: false,
  	dots: true,
  	infinite: false,
  	pauseOnHover: false,
  	slidesToShow: 5,
	  slidesToScroll: 5,
	  speed: 300,
    responsive: [
	    {
	      breakpoint: 996,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    }
	  ]
  });
});