/*!
* Start Bootstrap - Creative v7.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/

// These scripts are aimed to improve UI & UX for the theme.

window.addEventListener('DOMContentLoaded', event => {

    // Define navigation bar shrink function.
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar.
    navbarShrink();

    // Shrink the navbar when page is scrolled.
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main navigation element.
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navigation bar when toggler is visible.
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items.
    // Uncomment the following lines to switch on SimpleLightbox functionality.
    // NB: this should be in HTML <body>: <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>
    // new SimpleLightbox({
        // elements: '#portfolio a.portfolio-box'
    // });

});
