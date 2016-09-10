var clockDiv = document.getElementById('clock')
var hourClock = document.getElementById('hours')
var minuteClock = document.getElementById('minutes')
var secondClock = document.getElementById('seconds')
var ampmClock = document.getElementById('ampm')

function startTime() {
    var currentTime = new Date()
    var h = currentTime.getHours()
    var m = currentTime.getMinutes()
    var s = currentTime.getSeconds()
    var amPm = "am"
 
    //convert military to standard time
    if (h > 11) {
        amPm = "pm";
    }

    if (h > 12) {
        h = h - 12;
    } 
    /*else if (h === 0) {
       h = 12;
    }*/
    //add zero in front of single digit number
    function doubleDigit(i) {
	    if (i < 10) {
	        i = "0" + i
	    }
	    return i
	}
    
    h = doubleDigit(h)
    m = doubleDigit(m)
    s = doubleDigit(s)

    //display time in their respective divs
    hourClock.innerHTML = h
    minuteClock.innerHTML = m
    secondClock.innerHTML = s
    ampmClock.innerHTML = amPm


    //advances time by the second
    setTimeout(function () {
        startTime()
    }, 1000)
}

// add eventlistener to html
clockDiv.addEventListener('load', startTime(), false)
