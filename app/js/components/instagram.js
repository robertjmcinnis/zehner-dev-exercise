// COMPONENT: Instafeed

(function ($) {
    $(window).on('load', function () {
        $.instagramFeed({
            'username': 'foodliners',
            'container': "#instagram__feed",
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'callback': null,
            'styling': false,
            'items': 7,
            'items_per_row': 1,
            'margin': 0,
            'lazy_load': true,
            'on_error': console.error
        });
    });
})(jQuery);