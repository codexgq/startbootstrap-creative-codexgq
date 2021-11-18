/*!
 * Custom JS Inline - startbootstrap-creative-codexgq v1.0.0 (https://github.com/codexgq/startbootstrap-creative-codexgq)
 * Copyright 2014-2021 codexgq, Inc.
 * Licensed under MIT (https://github.com/codexgq/startbootstrap-creative-codexgq/blob/master/LICENSE)
 *
 * Original formatting is carefully kept for easy implementation. Uncomment the corresponding lines and insert this in your HTML if apply.
 *
 */

        // <!-- Inline JavaScript (JS)-->
        // <!-- Lazy Load Images (The running script is in the <head> inline)-->
        // <script>
            // Call the function.
            deferimg('img[data-src],picture[srcset]')
        // </script>
        // <!-- HTML5 Link Prefetch and Page Prerender-->
        // <script>
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
        // </script> 
        // <!-- Scroll To Top Button JS-->
        // <script>
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
            }
        // </script>
        // <!-- Full Screen Navigation JS-->
        // <script>
            function openFullscreenNav() {
                document.getElementById("fullscreenNav").style.width = "100%";
            }
            function closeFullscreenNav() {
                document.getElementById("fullscreenNav").style.width = "0%";
            }
        // </script>
        // <!-- Prevent Frame-->
        // <script>
            if (top != self) {
            	  top.location.href = self.location.href;
                }
        // </script>
        // <!-- Application Cache-->
        // <script>
        function updateCache() {
            // If you change the appcache manifest file and reload the page, the browser will download the new files in the cache, and then switch to the new cache.
            window.applicationCache.addEventListener('updateready', function(){
                window.applicationCache.swapCache();
            }, false);
        }
        // </script>
        // <!-- END Inline JavaScript (JS)-->
