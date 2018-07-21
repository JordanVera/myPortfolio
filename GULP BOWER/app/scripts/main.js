

(function ($) {
    'use strict';
       $('.side-bar').accordionze({
        accordionze: true
        , speed: 300
        , closedSign: '<b class="fa fa-circle"></b>'
        , openedSign: '<b class="fa fa-circle"></b>'
    });
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
    //slicknav
    $('.slicknav').slicknav({
        label: 'Fondamix'
    });
    /*
     * INITIALIZE BUTTON TOGGLE
     * ------------------------
     * always use this code for toggle and close button effect
     */
 
    $('.slim-scroll').slimscroll({
        height: '180px'
        , alwaysVisible: false
        , size: '3px'
    });
    $('.off-canvas-nest').slimscroll({
        height: '600px'
        , alwaysVisible: false
        , position: 'left'
        , alwaysVisible: true
        , allowPageScroll: true
        , size: '3px'
    });
    $('.sidebar-fixed').slimscroll({
        height: '360px'
        , width: '260px'
        , position: 'left'
        , alwaysVisible: true
        , allowPageScroll: true
        , distance: '-1px'
        , size: '4px'
    });
})(jQuery);
/*     
 * Add collapse and remove events to boxes
 */
(function ($) {
    'use strict';
    $('[data-widget=\'collapse\']').click(function () {
        //Find the box parent        
        var box = $(this).parents('.box').first();
        //Find the body and the footer
        var bf = box.find('.box-body, .box-footer');
        if (!box.hasClass('collapsed-box')) {
            box.addClass('collapsed-box');
            bf.slideUp();
        }
        else {
            box.removeClass('collapsed-box');
            bf.slideDown();
        }
    });
})(jQuery);
//Find the box parent
(function ($) {
    'use strict';
    $('[data-widget=\'remove\']').click(function () {
        var box = $(this).parents('.box').first();
        box.slideUp();
    });
})(jQuery);