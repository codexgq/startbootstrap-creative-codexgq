'use strict';

/*!
 * Progressive Web Application (PWA) Service Worker
 */
/*!
 * PWA for supported browsers appeared courtesy to SuperPWA (https://superpwa.com/)
 * Copyright 2018-2021 SuperPWA
 * Licensed under GNU GPL (https://github.com/SuperPWA/Super-Progressive-Web-Apps/blob/master/license.txt)
 */
/*!
 * Customized by codexgq Team for startbootstrap-creative-codexgq theme (https://github.com/codexgq/startbootstrap-creative-codexgq)
 * Copyright 2014-2021 codexgq, Inc.
 * Licensed under MIT (https://github.com/codexgq/startbootstrap-creative-codexgq/blob/master/LICENSE)
 */
 
const cacheName = 'codex.gq-superpwa-2.0.2';
const startPage = 'https://codex.gq/';
const offlinePage = 'https://codex.gq/index.html';
const filesToCache = [
	startPage, 
	offlinePage
];
const resourcesToCache = [
	'https://codex.gq/assets/favicon-package/android-chrome-144x144.png',
	'https://codex.gq/assets/screenshots/desktop-homepage.png',
	'https://codex.gq/assets/screenshots/mobile-about.png',
	'https://codex.gq/assets/screenshots/mobile-services.png',
	'https://codex.gq/assets/screenshots/mobile-solutions.png',
	'https://codex.gq/assets/screenshots/mobile-products.png',
	'https://codex.gq/assets/screenshots/mobile-free.png',
	'https://codex.gq/assets/screenshots/mobile-contact.png',
	'https://codex.gq/assets/screenshots/mobile-store.png',
	'https://codex.gq/assets/screenshots/mobile-homepage.png',
	'https://codex.gq/assets/screenshots/desktop-hreflang.png',
	'https://codex.gq/assets/screenshots/desktop-about.png',
	'https://codex.gq/assets/screenshots/desktop-services.png',
	'https://codex.gq/assets/screenshots/desktop-solutions.png',
	'https://codex.gq/assets/screenshots/desktop-contact.png',
	'https://codex.gq/assets/screenshots/desktop-store.png',
	'https://codex.gq/assets/screenshots/desktop-brand.png',
	'https://codex.gq/favicon.ico',
	'https://codex.gq/site.webmanifest'
  ];
const neverCacheUrls = [/\/scripts/,/\/src/,/\/.editorconfig/,/\/.gitignore/,/\/CNAME/,/\/declaration.md/,/\/LICENSE/,/\/package.json/,/\/package-lock.json/,/\/README.md/,/\/?s={query}/,/\/?s=/];

// Install
self.addEventListener('install', function(e) {
	console.log('SuperPWA service worker installation.');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('SuperPWA service worker caching dependencies.');
			filesToCache.map(function(url) {
				return cache.add(url).catch(function (reason) {
					return console.log('SuperPWA: ' + String(reason) + ' ' + url);
				});
			});
		})
	);
});

// Activate
self.addEventListener('activate', function(e) {
	console.log('SuperPWA service worker activation.');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if ( key !== cacheName ) {
					console.log('SuperPWA old cache removed.', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});

// Fetch
self.addEventListener('fetch', function(e) {
	
	// Return if the current request url is in the never cache list
	if ( ! neverCacheUrls.every(checkNeverCacheList, e.request.url) ) {
	  console.log( 'SuperPWA: Current request is excluded from cache.' );
	  return;
	}
	
	// Return if request url protocal isn't http or https
	if ( ! e.request.url.match(/^(http|https):\/\//i) )
		return;
	
	// Return if request url is from an external domain.
	if ( new URL(e.request.url).origin !== location.origin )
		return;
	
	// For GET requests, do not use the cache. Serve offline page if offline.
	if ( e.request.method !== 'GET' ) {
		e.respondWith(
			fetch(e.request).catch( function() {
				return caches.match(offlinePage);
			})
		);
		return;
	}
	
	// Revving strategy
	if ( e.request.mode === 'navigate' && navigator.onLine ) {
		e.respondWith(
			fetch(e.request).then(function(response) {
				return caches.open(cacheName).then(function(cache) {
					cache.put(e.request, response.clone());
					return response;
				});  
			})
		);
		return;
	}

	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request).then(function(response) {
				return caches.open(cacheName).then(function(cache) {
					cache.put(e.request, response.clone());
					return response;
				});  
			});
		}).catch(function() {
			return caches.match(offlinePage);
		})
	);
});

// Check if current url is in the neverCacheUrls list
function checkNeverCacheList(url) {
	if ( this.match(url) ) {
		return false;
	}
	return true;
}
