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

/*!
 * Custom JS - startbootstrap-creative-codexgq v1.0.0 (https://github.com/codexgq/startbootstrap-creative-codexgq)
 * Copyright 2014-2021 codexgq, Inc.
 * Licensed under MIT (https://github.com/codexgq/startbootstrap-creative-codexgq/blob/master/LICENSE)
 * 
 * For easy inline implementation of this code please refer to the following:
 * GitHub: https://github.com/codexgq/startbootstrap-creative-codexgq/blob/master/src/custom/js/inline.js, https://github.com/codexgq/startbootstrap-creative-codexgq/blob/master/src/custom/html/inline_js.html
 * URL: https://codex.gq/src/custom/js/inline.js, https://codex.gq/src/custom/html/inline_js.html
 * 
 * For custom scripts not in custom.js please refer to the HTML inline.
 */

// Lazy Load Images (The running script is in the <head> inline)

    // Call the function.
    deferimg('img[data-src],picture[srcset]');

// HTML5 Link Prefetch and Page Prerender

    // Define the function.
    function add_hint(type, url) {
        if (!type || !url) return;
        var el = document.createElement("link");
        el.setAttribute("rel", type);
        el.setAttribute("href", url);
        el.setAttribute("src", url);
        document.getElementsByTagName("head")[0].appendChild(el);
        document.getElementsByTagName("body")[0].appendChild(el);
    }
    // Prefetch, dns-prefetch, preload, prerender or preconnect links for website acceleretion.
    add_hint('dns-prefetch', 'https://cdn.codex.gq/');
    add_hint('dns-prefetch', 'https://cdn.jsdelivr.net/');
    add_hint('dns-prefetch', 'https://www.jsdelivr.com/');
    add_hint('dns-prefetch', 'https://fonts.gstatic.com/');
    add_hint('dns-prefetch', 'https://fonts.googleapis.com/');
    // Speed up transitions between pages by prerendering them within a domain.
    document.addEventListener("mousemove", function (e) {
        if (!e.target.href ||
            e.target.href.indexOf(location.host) == -1 ||
            e.target.hintAdded) return;
        add_hint('prerender', e.target.href);
        e.target.hintAdded =  true;
    });            

// Scroll To Top Button

    // Get the button.
    var topButton = document.getElementById("btn-top");
    // When the user scrolls down 20px from the top of the document, show the button.
    window.onscroll = function() {
        scrollFunction()
    };
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document.
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

// Full Screen Navigation JS

    function openFullscreenNav() {
        document.getElementById("fullscreenNav").style.width = "100%";
    }
    function closeFullscreenNav() {
        document.getElementById("fullscreenNav").style.width = "0%";
    };

// Prevent Frame

    if (top != self) {
          top.location.href = self.location.href;
        };
