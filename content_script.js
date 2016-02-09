var ListTable = document.getElementById("pl-load-more-destination");

var vidLengths = ListTable.querySelectorAll('span[aria-label]');


var totalSecs = 0;


for (var i = 0; i < vidLengths.length; i++) {

	var time = vidLengths[i].innerHTML;
	var colon = time.indexOf(":");

	var minInSecs = parseInt((time.substring(0,colon) * 60), 10);
	var secs = parseInt((time.substring(colon+1, 5)), 10);
	totalSecs += minInSecs;
	totalSecs += secs;
}

// console.log(totalSecs);
var h = ~~(totalSecs / (60*60));	// ~~ double bitwise not used to do integer division
var m = ~~(totalSecs/60) - h*60;
var s = totalSecs - (h*60*60 + m*60);

console.log(h + " h " + m + " m " + s + " s");

var res = "The total duration of this playlist is: \n" + h + " h " + m + " m " + s + " s";

alert(res);
