var ListTable = document.getElementById("pl-load-more-destination");
var vidLengths = ListTable.querySelectorAll('span[aria-label]');
var totalSecs = 0;

for (var i = 0; i < vidLengths.length; i++) {

	var time = vidLengths[i].innerHTML;
	var timeArr = time.split(":");
	var timeArrLen = timeArr.length;
	
	switch (timeArrLen) {
		case 3:
			var secs = parseInt(timeArr[2], 10);
			var minInSecs = parseInt((timeArr[1] * 60), 10);
			var hrsInSecs = parseInt((timeArr[0] *60*60), 10);
			console.log(secs);
			totalSecs += secs;
			totalSecs += minInSecs;
			totalSecs += hrsInSecs;
			
		case 2:
			var secs = parseInt(timeArr[1], 10);
			var minInSecs = parseInt((timeArr[0] * 60), 10);
			console.log(secs);
			totalSecs += secs;
			totalSecs += minInSecs;
			
		case 1:
			var secs = parseInt(timeArr[0], 10);
			console.log(secs);
			totalSecs += secs;
	}
}
console.log(totalSecs);
var h = ~~(totalSecs / (60*60));	// ~~ double bitwise not used to do integer division
var m = ~~(totalSecs/60) - h*60;
var s = totalSecs - (h*60*60 + m*60);

console.log(h + " h " + m + " m " + s + " s");

var res = "The total duration of this playlist is: \n" + h + " h " + m + " m " + s + " s";

alert(res);
