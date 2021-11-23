/*!
 * Disable Right Click - startbootstrap-creative-codexgq v1.0.0 (https://github.com/codexgq/startbootstrap-creative-codexgq)
 * Copyright 2014-2021 codexgq, Inc.
 * Licensed under MIT (https://github.com/codexgq/startbootstrap-creative-codexgq/blob/master/LICENSE)
 * 
 * This is inspired by and based on the Stack Overflow pipeline.
 */

// Disable Right Click, View Source, Inspect Element, Cut-Copy-Paste and Image Drag-n-Drop.

var show_msg = '0';
if (show_msg !== '0') {
	var options = {
		view_src: "View Source is disabled!",
		inspect_elem: "Inspect Element is disabled!",
		right_click: "Right Click is disabled!",
		copy_cut_paste_content: "Cut-Copy-Paste are disabled!",
		image_drop: "Image Drag-n-Drop is disabled!"
	}
} else {
	var options = 'You are not allowed to perform this action!';
}

function nocontextmenu(e) {
	return false;
}
document.oncontextmenu = nocontextmenu;
document.ondragstart = function() {
	return false;
}

document.onmousedown = function(event) {
	event = (event || window.event);
	if (event.keyCode === 123) {
		if (show_msg !== '0') {
			show_toast('inspect_elem');
		}
		return false;
	}
}
document.onkeydown = function(event) {
	event = (event || window.event);
	// alert(event.keyCode);   return false;
    // .keyCode property is deprecated but it still works and kept for old browsers compatibility.
	if (event.keyCode === 123 ||
		event.ctrlKey && event.shiftKey && event.keyCode === 73 ||
		event.ctrlKey && event.shiftKey && event.keyCode === 75) {
		if (show_msg !== '0') {
			show_toast('inspect_elem');
		}
		return false;
	}
	if (event.ctrlKey && event.keyCode === 85) {
		if (show_msg !== '0') {
			show_toast('view_src');
		}
		return false;
	}
}

function addMultiEventListener(element, eventNames, listener) {
	var events = eventNames.split(' ');
	for (var i = 0, iLen = events.length; i < iLen; i++) {
		element.addEventListener(events[i], function(e) {
			e.preventDefault();
			if (show_msg !== '0') {
				show_toast(listener);
			}
		});
	}
}
addMultiEventListener(document, 'contextmenu', 'right_click');
addMultiEventListener(document, 'cut copy paste print', 'copy_cut_paste_content');
addMultiEventListener(document, 'drag drop', 'image_drop');

function show_toast(text) {
	var x = document.getElementById("amm_drcfw_toast_msg");
	x.innerHTML = eval('options.' + text);
	x.className = "show";
	setTimeout(function() {
		x.className = x.className.replace("show", "")
	}, 3000);
};

document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

// NB: Never disable right click if this isn't needed for real as it influences people to inspect your code :)
