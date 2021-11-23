/*!
 * Include Content - startbootstrap-creative-codexgq v1.0.0 (https://github.com/codexgq/startbootstrap-creative-codexgq)
 * Copyright 2014-2021 codexgq, Inc.
 * Licensed under MIT (https://github.com/codexgq/startbootstrap-creative-codexgq/blob/master/LICENSE)
 * 
 * Based on the W3Schools 'How TO' templates for Include HTML snippets.
 */

// Includes any file content into visual HTML.
// Example: '<div data-href="content.html"></div>'

// Define the function.
function includeContent() {
    var z, i, elmnt, file, xhttp;
    // Loop through a collection of all file (html, php, txt, and etc.) elements.
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        // Search for elements with a certain atrribute.
        file = elmnt.getAttribute("data-href");
        if (file) {
            // Make an HTTP request using the attribute value as the file name.
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    // Remove the attribute, and call this function once more.
                    elmnt.removeAttribute("data-href");
                    includeContent();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            // Exit the function.
            return;
        }
    }
};

// Get content inline.
includeContent();
