/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Ema Khanom
   Date: 11/24/2026  

*/
runClock();
setInterval(runClock, 1000);

function runClock() {
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

document.getElementById("dateNow").innerHTML =
    dateStr + "<br />" + timeStr;

var newYear = new Date(currentDay.getFullYear() + 1, 0, 1);

var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

var hrsLeft = (daysLeft % 1) * 24;
var minsLeft = (hrsLeft % 1) * 60;
var secsLeft = (minsLeft % 1) * 60;

document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);
}