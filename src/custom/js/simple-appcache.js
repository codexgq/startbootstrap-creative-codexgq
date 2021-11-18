/*!
 * Simple Application Cache
 * Copyright 2014-2021 codexgq, Inc.
 * Licensed under MIT (https://github.com/codexgq/startbootstrap-creative-codexgq/blob/master/LICENSE)
 * 
 * To enhance appcache experience please refer to our GitHub source (https://github.com/codexgq/startbootstrap-creative-codexgq/blob/master/src/custom/js/appcache.js)
 * 
 */
// *
// Prerequisites: The application cache manifest should be created and deployed as <link rel="manifest" type="text/cache-manifest" href="default.appcache" />
// *
// Once an application is offline it remains cached until one of the following happens:
// an user clears their browser's data storage for your site;
// the manifest file is modified.
// Note: updating a file listed in the manifest doesn't mean the browser will re-cache that resource. The manifest file itself must be altered.
// *
// Define the function.
function updateCache() {
    // If you change the appcache manifest file and reload the page, the browser will download the new files in the cache, and then switch to the new cache.
    window.applicationCache.addEventListener('updateready', function(){
        window.applicationCache.swapCache();
    }, false);
}
