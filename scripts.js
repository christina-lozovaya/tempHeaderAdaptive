/*navigation*/
jQuery(document).ready(function ($) {
    $nav = $('.nav');
    $navList = $('.nav__list');
    $toggleMenuBtn = $(".nav__toggle");
    $body = $('body');

    function isMobile() {
        return $(window).width() <= 800;
    }

    function initDeviceNavView() {
        $init = $(".nav").attr('data-init-mobile-menu');

        if (isMobile()) {
            if ($init !== 'true') {
                $nav.attr("data-init-mobile-menu", "true");
                $navList.removeClass('shown');
            }
        } else {
            if ($init === 'true') {
                $nav.attr("data-init-mobile-menu", "false");
            }
            $nav.attr("data-init-mobile-menu", "false");
            $navList.addClass('shown');
        }
    }

    function showMobileMenu() {
        $body.removeClass('noscroll');

        $toggleMenuBtn.on('click', function () {
            $navList.toggleClass('shown');
            $toggleMenuBtn.toggleClass('active');

            if ($navList.hasClass('shown')) {
                $(this).attr('aria-expanded', 'true');
                $body.addClass('noscroll');
            } else {
                $(this).attr('aria-expanded', 'false');
                $body.removeClass('noscroll');
            }
        });
    }

    initDeviceNavView();
    showMobileMenu();

    $(window).on('resize', function (e) {
        initDeviceNavView();
    }).trigger('resize');
});