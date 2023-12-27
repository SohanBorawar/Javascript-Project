"use strict";

var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var second = document.getElementById("seconds");
var dd = document.getElementById("dd");
var hh = document.getElementById("hh");
var mm = document.getElementById("mm");
var ss = document.getElementById("ss");
var endDate = '01/01/2024 00:00:00';
var x = setInterval(function () {
  var now = new Date(endDate).getTime();
  var countdown = new Date().getTime();
  var distance = now - countdown; //  time calculation for days and etc 

  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var m = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  var s = Math.floor(distance % (1000 * 60) / 1000); //  output the result in element by id

  days.innerHTML = d + "<br><span>Days</span>";
  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  second.innerHTML = s + "<br><span>Seconds</span>";
});