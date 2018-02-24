$( function() {

  $('.main_slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false,
	  customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a>'+(i+1)+'</a>';
      return      }
	});

  $('.menu-trigger').click(function() {
    $('ul.main_menu').slideToggle(500);
  });//end slide toggle


	function mediaSize() { 

		if (window.matchMedia('(max-width: 992px)').matches) {

			$('.features_list').insertAfter('.main_slider');

		} else {
		/* Reset for CSS changes – Still need a better way to do this! */
			$('body, strong').removeAttr('style');
		}
	};	
  mediaSize();
	window.addEventListener('resize', mediaSize, false); 


	

		



});