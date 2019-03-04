export default {
	init() {
		$('.hamburger').click(function() {
			$(this).toggleClass('is-active');
            $('.header-main-menu').slideToggle();
        });
	},
	finalize() {

    $('.single-item').slick({
    	arrows: true,
            responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    });

    $('.responsive').slick({
    	infinite: true,
    	slidesToShow: 4,
    	slidesToScroll: 1,
    	arrows: true,
    	adaptiveHeight: true,
    	responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            },
        },
    	{
    		breakpoint: 992,
    		settings: {
    			slidesToShow: 2,
    			slidesToScroll: 2,
    		},
    	},
    	{
    		breakpoint: 768,
    		settings: {
    			slidesToShow: 1,
    			slidesToScroll: 1,
                arrows: false,
    		},
    	},
    	],
    });

      var isOptionOpen = false;
    $('.top-line-site-option ul li').hover(
        function(){
            isOptionOpen = true;
            $("ul", this).slideDown(200);
        },
        function(){
            isOptionOpen = false;
            if(isOptionOpen){
                return;
            }
            $("ul", this).slideUp(200);
        }
        );

    $('.top-line-site-option li ul').hide();
    $('.top-line-site-option ul li').on('click', function(e) {
        e.preventDefault();
        $('ul', this).slideToggle(200);
        $('ul', this).css({'display':'flex'});
    });

    $('.header-menu ul li ul').hide();
    $('li li:has(li)').find('a:first').addClass('arrow');
    $('.header-menu ul li').hover(
     function() {
        $(this).addClass('active');
        $('ul:first', this).slideDown(200);
    },
    function() {
      $(this).removeClass('active');
      $('ul:first', this).slideUp(200);
  }
  );



},
};
