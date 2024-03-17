; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })

        $(document).on('mouseover','.single-intro-inner',function() {
            $(this).addClass('single-intro-inner-active');
            $('.single-intro-inner').removeClass('single-intro-inner-active');
            $(this).addClass('single-intro-inner-active');
        });

        $(document).on('mouseover','.single-pricing-wrap',function() {
            $(this).addClass('single-pricing-wrap-active');
            $('.single-pricing-wrap').removeClass('single-pricing-wrap-active');
            $(this).addClass('single-pricing-wrap-active');
        });
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length){
            $('.single-select').niceSelect();
        }

        /* --------------------------------------------------
            isotop filter 
        ---------------------------------------------------- */
        var $Container = $('.isotop-filter-area');
        if ($Container.length > 0) {
            $('.property-filter-area').imagesLoaded(function () {
                var festivarMasonry = $Container.isotope({
                    itemSelector: '.project-filter-item', // use a separate class for itemSelector, other than .col-
                    masonry: {
                        gutter: 0
                    }
                });
                $(document).on('click', '.isotop-filter-menu > button', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
            $(document).on('click','.isotop-filter-menu > button' , function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#td-search-popup');
        var sidebarMenu = $('#sidebar-menu');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click','.search-bar-btn',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
        });

        // sidebar menu 
        $(document).on('click', '.sidebar-menu-close', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '#navigation-button', function (e) {
            e.preventDefault();
            sidebarMenu.addClass('active');
            bodyOvrelay.addClass('active');
        });

        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftArrow = '<i class="fa fa-angle-left"></i>';
        var rightArrow = '<i class="fa fa-angle-right"></i>';
        var leftArrow2 = '<i class="fas fa-arrow-circle-left"></i>';
        var rightArrow2 = '<i class="fas fa-arrow-circle-right"></i>';

        /*------------------------------------------------
            banner-slider
        ------------------------------------------------*/
        $('.banner-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            items: 1,
            navText: [leftArrow,rightArrow],
        });

        /*------------------------------------------------
            intro-slider
        ------------------------------------------------*/
        $('.intro-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 4
                },
            }
        });

        /*------------------------------------------------
            testimonial-slider
        ------------------------------------------------*/
        $('.testimonial-slider').owlCarousel({
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            items: 1,
            loop: true,
            autoplay:true,
        });

        $('.testimonial-slider-2').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                992: {
                    items: 2
                },
            }
        });



        /*------------------------------------------------
            client-slider
        ------------------------------------------------*/
        $('.client-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                992: {
                    items: 5
                },
            }
        });

        /*------------------------------------------------
            client-slider
        ------------------------------------------------*/
        $('.production-slider').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: false,
            smartSpeed: 2000,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1300: {
                    items: 5
                },
                1600: {
                    items: 6
                },
            }
        });

        /******** slider-services *******/
        $('.tipster-slider').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: false,
            smartSpeed: 2000,
            autoplay: false,
            center: true,
            navText: [leftArrow2,rightArrow2],
            responsive: {
                0: {
                    items: 3
                },
                576: {
                    items: 5
                },
                768: {
                    items: 7
                },
                992: {
                    items: 9
                },
                1300: {
                    items: 9
                },
                1600: {
                    items: 9
                },
            }
        });

        /******** match-start-time-slider *******/
        $('.match-start-time-slider').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            smartSpeed: 2000,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                992: {
                    items: 2
                },
            }
        });

        /*------------------------------------------------
            client-slider
        ------------------------------------------------*/
        // $('.slider-services').slick({
        //     dots: true,
        //     appendDots: '.slider-dots',
        //     arrows: true,
        //     infinite: false,
        //     slidesToScroll: 9,
        //     slidesToShow: 9,
        //     accessibility: true,
        //     variableWidth: false,
        //     focusOnSelect: false,
        //     centerMode: true,
        //     responsive: [
        //         {
        //             breakpoint: 992,
        //             settings: {
        //                 slidesToScroll: 2,
        //                 slidesToShow: 2
        //             }
        //         },
        //         {
        //             breakpoint: 600,
        //             settings: {
        //                 slidesToScroll: 1,
        //                 slidesToShow: 1
        //             }
        //         }
        //     ]
        // });

        /*------------------------------------------------
            banner-slider
        ------------------------------------------------*/
        $('.blog-thumb-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            items: 1,
            navText: [leftArrow,rightArrow],
        });

        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
        $('.video-play-btn').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });

        /* -----------------------------------------
            fact counter
        ----------------------------------------- */
        $('.counter').counterUp({
            delay: 15,
            time: 2000
        });

        $('#myTab a').on('click', function (e) {
            e.preventDefault()
            $(this).tab('show')
        });


        /*----------------------------------------
           back to top
        ----------------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    });

    $(window).on("scroll", function() {
        /*---------------------------------------
            back-to-top
        -----------------------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        /*---------------------------------------
            sticky-active
        -----------------------------------------*/
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".navbar").removeClass("sticky-active");
        } else {
            $(".navbar").addClass("sticky-active");
        }

    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });



})(jQuery);