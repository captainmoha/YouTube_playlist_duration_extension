document.addEventListener('DOMContentLoaded', function() {

	var getDurButton = document.getElementById('getDuration');

	getDurButton.addEventListener('click', function() {

		chrome.tabs.executeScript(null, {file:"content_script.js"}, function() {
			// var resEl = document.getElementById('res');
		});
	}, false);
}, false);

