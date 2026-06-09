$(document).ready(function(){
    const $navGrid = $('.nav-grid, .home-nav-grid');
    const $container = $('.nav-grid > .container, .home-nav-grid > .container');
    const $hamburger = $('#hamburger');

    function openMenu() {
        $navGrid.css('z-index', '10020');
        $container.fadeIn();
        $container.animate({ height: '100vh', opacity: '1' }, 'slow');
        $hamburger.css('visibility', 'hidden');
    }

    function closeMenu() {
        $navGrid.css('z-index', '1');
        $container.animate({ height: '0', opacity: '0' }, 'slow', function() {
            $container.fadeOut();
        });
        $hamburger.css('visibility', 'visible');
    }

    $hamburger.click(openMenu);
    $('#hamburger-close').click(closeMenu);
});