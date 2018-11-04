$(document).ready(function($) {
    "use strict";

    // Top Slider
    var owl = $("#top-slider");
    owl.owlCarousel({
        navigation: true,
        pagination: false,
        singleItem: true,
        autoPlay: 3000,
        slideSpeed: 500,
        transitionStyle: "fadeUp"
    });

    // Top Slider
    var owl = $("#main-slider");
    owl.owlCarousel({
        navigation: false,
        pagination: false,
        singleItem: true,
        autoPlay: 3000,
        transitionStyle: "fade"
    });
    


    // Stats 
    $('.counter-section').appear(function() {
        $('.fact1 span').animateNumber({
            number: 2135
        }, 1300);
        $('.fact2 span').animateNumber({
            number: 55
        }, 1700);
        $('.fact3 span').animateNumber({
            number: 32
        }, 1700);
    }, {
        accX: 0,
        accY: -200
    });

    // Nav Scroll
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 70)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Testimonial
    $("#quote-slider").owlCarousel({
        navigation: false,
        slideSpeed: 700,
        autoPlay: 5000,
        pagination: true,
        singleItem: true
    });

    // Home Slider
    var owl = $("#home-slider");
    owl.owlCarousel({
        navigation: false,
        pagination: true,
        singleItem: true,
        transitionStyle: "fade"
    });

    // Gallery
    $('#gal-slider').slick({
        arrows: true,
        speed: 700,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // Gallery
    $('#clients2-slider').slick({
        arrows: false,
        speed: 800,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // Slider
    $('.c-slider').slick({
        arrows: true,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // Sticky Header
    $(".header4").sticky({
        topSpacing: 75
    });

    // Bootstrap Dropdown
    $('.nav a.page-scroll').on('click', function() {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").trigger("click");
        }
    });

    $('.dropdown-menu a').on('click', function() {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").trigger("click");
        }
    });

    // Bootstrap Dropdown
    function toggleNavbarMethod() {
        if ($(window).width() > 768) {
            $('.navbar .dropdown').on('mouseover', function() {
                $('.dropdown-toggle', this).trigger('click');
            }).on('mouseout', function() {
                $('.dropdown-toggle', this).trigger('click').blur();
            });
        } else {
            $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
    }

    // toggle navbar hover
    toggleNavbarMethod();
    
     $('.navbar-toggle').on('click', function() {
        if ($('.navbar-nav').hasClass('slide')) {
            $('.navbar-nav').removeClass('slide');
        }else {
            $('.navbar-nav').addClass('slide');
        } 
        return false;
    });

    // bind resize event
    $(window).resize(toggleNavbarMethod);

    // Magnific Lightbox
    $('.pop_lbox').magnificPopup({
        gallery: {
            enabled: true
        },
        removalDelay: 300,
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function 
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    // Parallax js
    $('.facts').parallax("50%", 0.2, true);
    $('.parallax-wrap1').parallax("50%", 0.2, false);
    $('.parallax-wrap2').parallax("50%", 0.2, false);

    // CSS3 Animations
    $('.animate1').appear(function() {
        $(this).addClass('animated fadeIn');
    }, {
        accX: 0,
        accY: -200
    });

    $('.animate2').appear(function() {
        $(this).addClass('animated fadeInDown');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate3').appear(function() {
        $(this).addClass('animated bounceInLeft');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate4').appear(function() {
        $(this).addClass('animated bounceInRight');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate5').appear(function() {
        $(this).addClass('animated fadeInUp');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate6').appear(function() {
        $(this).addClass('animated fadeIn');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate7').appear(function() {
        $(this).addClass('animated fadeIn');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate8').appear(function() {
        $(this).addClass('animated fadeIn');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate9').appear(function() {
        $(this).addClass('animated fadeInUp');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate10').appear(function() {
        $(this).addClass('animated fadeIn');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate11').appear(function() {
        $(this).addClass('animated fadeIn');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate12').appear(function() {
        $(this).addClass('animated fadeInUp');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate13').appear(function() {
        $(this).addClass('animated bounceInLeft');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate14').appear(function() {
        $(this).addClass('animated fadeInUp');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate15').appear(function() {
        $(this).addClass('animated bounceInRight');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate16').appear(function() {
        $(this).addClass('animated fadeIn');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate17').appear(function() {
        $(this).addClass('animated fadeIn');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate18').appear(function() {
        $(this).addClass('animated fadeInUp');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate19').appear(function() {
        $(this).addClass('animated fadeIn');
    }, {
        accX: 0,
        accY: -150
    });

    $('.animate20').appear(function() {
        $(this).addClass('animated fadeInDown');
    }, {
        accX: 0,
        accY: -150
    });

});

// Header Scroll
$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 500)
        $(".header1").addClass("header-active");
    else
        $(".header1").removeClass("header-active");
});

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 500)
        $(".header5").addClass("header-active2");
    else
        $(".header5").removeClass("header-active2");
});

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 500)
        $(".header3").addClass("header-active3");
    else
        $(".header3").removeClass("header-active3");
});


$(window).load(function() {
    "use strict";

    /* Loading Script */
    $('#loader').fadeOut("slow");

    // Isotope
    var $container = $('#folio');
    $container.isotope({
        itemSelector: '.folio-item'
    });
    var $optionSets = $('#portfolio .folio-filter'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.folio-filter');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            $container.isotope(options);
        }
        return false;
    });
});

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 500)
        $('.go-top').fadeIn();
    else
        $('.go-top').fadeOut();
});



jQuery.fn.center = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    this.css({
        "position": "absolute",
        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
return this;
}

$(".intro-inner").center(true);
$(".intro3-inner").center(true);
