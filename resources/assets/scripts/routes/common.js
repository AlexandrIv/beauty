export default {
	init() {
		$('.hamburger').click(function() {
			$(this).toggleClass('is-active');
            $('.header-main-menu').slideToggle();
        });
	},
	finalize() {
    //$('.single-item').slick();

    $('.single-item').slick({
    	arrows: true,
    });

    $('.responsive').slick({
    	infinite: true,
    	slidesToShow: 4,
    	slidesToScroll: 1,
    	arrows: true,
    	adaptiveHeight: true,
    	responsive: [
    	{
    		breakpoint: 1024,
    		settings: {
    			slidesToShow: 3,
    			slidesToScroll: 3,
    			infinite: true,
    			dots: true,
    		},
    	},
    	{
    		breakpoint: 600,
    		settings: {
    			slidesToShow: 2,
    			slidesToScroll: 2,
    		},
    	},
    	{
    		breakpoint: 480,
    		settings: {
    			slidesToShow: 1,
    			slidesToScroll: 1,
    		},
    	},
    	],
    });

    /*var isCartOpen = false;
    $('.top-line-site-cart a').on('click', function(){
        if(isCartOpen){            
            cartClose();
        }else {
            cartOpen();
        }
    });
    var cartContainer = $(".mini-cart");
    $('.top-line-site-cart a').hover(
        function() {
            console.log("Click func 1");
            //isCartOpen = false;
            cartOpen();
        },
        function() {
            console.log("Click func 2");
            //isCartOpen = true;
            cartClose();
        }
    );
    function cartOpen() {
        isCartOpen = true;
        cartContainer.slideDown(200);
        cartContainer.addClass("overlay");
    }
    function cartClose() {
        // if(isCartOpen){
        //     return;
        // }
        isCartOpen = false;
        cartContainer.slideUp(200);
        cartContainer.removeClass("overlay");
    }*/

    
    /*$('.top-line-site-cart a').on('click', function(){
        $('.mini-cart').slideToggle();
    });*/





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







/*    $('.header-menu ul li ul').hide();
    $('li li:has(li)').find('a:first').addClass('arrow');

    $(document).on("click", ".header-menu ul li", function () {
        $('ul:first', this).slideToggle(200);
    });
    $('.header-menu ul li').hover(
       function() {
        $(this).addClass('active');
        $('ul:first', this).css({'display':'flex'});
        $('ul:first', this).slideDown(200);
    },
    function() {
      $(this).removeClass('active');
      $('ul:first', this).slideUp(200);
  }
  );*/
















},
};
