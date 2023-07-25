$(document).ready(function(){
    // menu click event
    $('#menu-bar').click(function() {
        $('#header-menu').toggleClass('active');
        $('body').toggleClass('active');
    });

    $('#testimonial-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

});

