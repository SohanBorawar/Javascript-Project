let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let second = document.getElementById("seconds");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let endDate = '01/01/2024 00:00:00';

let x = setInterval(function(){
    let now = new Date(endDate).getTime();
    let countdown = new Date().getTime();

    let distance = now - countdown

    //  time calculation for days and etc 
    let d = Math.floor(distance / (1000 * 60 * 60 * 24))
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) 
    let s = Math.floor((distance % (1000 * 60)) / (1000))

    //  output the result in element by id
    days.innerHTML = d + "<br><span>Days</span>"
    hours.innerHTML = h + "<br><span>Hours</span>"
    minutes.innerHTML = m + "<br><span>Minutes</span>"
    second.innerHTML = s + "<br><span>Seconds</span>"
})
