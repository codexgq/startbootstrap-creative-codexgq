/*!
 * Application Cache
 * Copyright 2014-2021 codexgq, Inc.
 * Licensed under MIT (https://github.com/codexgq/startbootstrap-creative-codexgq/blob/master/LICENSE)
 */
/*!
 * Based on "A Beginner's Guide to Using the Application Cache" (https://www.html5rocks.com/en/tutorials/appcache/beginner/)
 * Appeared courtesy to Eric Bidelman of HTML5 Rocks is now Web Fundamentals (https://developers.google.com/web)
 * Content licensed under the Creative Commons Attribution 3.0 Unported (CC BY 3.0) (https://creativecommons.org/licenses/by/3.0/)
 * Code samples licensed under the Apache 2.0 License (http://www.apache.org/licenses/LICENSE-2.0)
 */
// *
// Prerequisites: The application cache manifest should be created and deployed as <link rel="manifest" type="text/cache-manifest" href="default.appcache" />
// *
// Once an application is offline it remains cached until one of the following happens:
// an user clears their browser's data storage for your site;
// the manifest file is modified.
// Note: updating a file listed in the manifest doesn't mean the browser will re-cache that resource. The manifest file itself must be altered.
// *
// Cache Status...
var appCache = window.applicationCache;
// Programmatic access to the browser's app cache.
function appCache() {
    switch (appCache.status) {
        case appCache.UNCACHED:
            return 'uncashed';
            break;
        case appCache.IDLE:
            return 'idle';
            break;
        case appCache.CHECKING:
            return 'checking';
            break;
        case appCache.DOWNLOADING:
            return 'downloading';
            break;
        case appCache.UPDATEREADY:
            return 'updateready';
            break;
        case appCache.OBSOLETE:
            return 'obsolete';
            break;
        default:
            return 'unknown cache status';
            break;
    }
}
// Monitor Cache and Update...
// Check if a new cache is available on page load and act accordingly.
function updateCache() {
    // Attempt to update the user's cache.
    appCache.update();
    // To update users to the newest version of your site, set a listener to monitor the updateready event on page load.
    window.addEventListener('load', function(e) {
        window.applicationCache.addEventListener('updateready', function(e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                // Browser downloaded a new app cache.
                // Swap it in and reload the page to get the new hotness.
                window.applicationCache.swapCache();
                if (confirm('A new version of this site is available. Load it?')) {
                    window.location.reload();
                }
            } else {
                // Manifest didn't changed. Nothing new to the server.
            }
        }, false);
    }, false);
}
// Additional events are exposed to monitor the cache's state.
// The browser fires events for things like download progress, updating the app cache, and error conditions.
// Set up event listeners for each type of cache event (error).
function handleCacheEvent(e) {
    // AppCache Events...    
    function handleCacheError(e) {
        // AppCache Errors...
        alert('Error: Cache failed to update!');
        // Fired after the first cache of the manifest.
        appCache.addEventListener('cached', handleCacheEvent, false);
        // Checking for an update. Always the first event fired in the sequence.
        appCache.addEventListener('checking', handleCacheEvent, false);
        // An update was found. The browser is fetching resources.
        appCache.addEventListener('downloading', handleCacheEvent, false);
        // The manifest returns 404 or 410, the download failed,
        // or the manifest changed while the download was in progress.
        appCache.addEventListener('error', handleCacheError, false);
        // Fired after the first download of the manifest.
        appCache.addEventListener('noupdate', handleCacheEvent, false);
        // Fired if the manifest file returns a 404 or 410.
        // This results in the application cache being deleted.
        appCache.addEventListener('obsolete', handleCacheEvent, false);
        // Fired for each resource listed in the manifest as it is being fetched.
        appCache.addEventListener('progress', handleCacheEvent, false);
        // Fired when the manifest resources have been newly redownloaded.
        appCache.addEventListener('updateready', handleCacheEvent, false);
    }
}
