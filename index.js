"use strict";

var headline = document.getElementById('myHeadline');

var timeDiv = document.getElementById('timeDiv');

var adj = document.getElementById('adjective');

var count = document.getElementById('count');

var today = new Date();
var firstClass = new Date("August 25, 2020 09:30");

var milliseconds = today - firstClass;
var seconds = milliseconds/1000;
var minutes = seconds/60;
var hours = minutes/60;
var days = hours/24;

var hourOfTheDay = today.getHours();
var minuteOfTheHour = today.getMinutes();

if (hourOfTheDay < 12) {
  headline.innerText = "Good morning! Thank you for visiting!";
} else {
  headline.innerText = "Greetings, and thank you for visiting!";
  if (hourOfTheDay > 12) {
    hourOfTheDay = hourOfTheDay - 12;
  }
}
headline.innerText += " It is " + hourOfTheDay + ":" + minuteOfTheHour;
