(function(e) {e(window.jQuery, window, document);})(function($, window, document) {
    console.log('init');
    var app = {

        // ==============================================================================================
        // Call your function here to become a single function
        // * This method make your code more modular and make it easy to toggle your function
        // * If you want to disable a function, just commented on function that you need to disable below
        // ==============================================================================================

        init: function($) {
            app.slide();
            app.showButton();
        },

        onResize: function() {
            // call function here to applied on resize window
        },

        showButton: function() {
            var button  = $('#top'), //button that scrolls user to top
                view = $(window),
                timeoutKey = -1;
        
            $(document).on('scroll', function() {
                if(timeoutKey) {
                    window.clearTimeout(timeoutKey);
                }
                timeoutKey = window.setTimeout(function(){
        
                    if (view.scrollTop() < 100) {
                        button.fadeOut();
                    }
                    else {
                        button.fadeIn();
                    }
                }, 100);
            });
        },

        // ======================================================================
        // Your function here
        // * Don't forget to use proper function name to describes your function
        // ======================================================================
        slide: function() {
            $(document).ready(function() {
                $('.owl-carousel').owlCarousel({
                    loop:true,
                    margin: 100,
                    nav:true,
                    items: 1,
                    dots: true,
                    navText: ['<button class="btn icon--large rounded-circle bgcolor--yellow"><i class="fa fa-arrow-left text-dark"></i></button>','<button class="btn icon--large rounded-circle bgcolor--yellow"><i class="fa fa-arrow-right text-dark"></i></button>']
                })
            });
        }
    }

    $(document).ready(function () {
        app.init($);
        $(window).resize(function() {
            app.onResize();
        });
    });
});