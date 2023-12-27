function getdatetime (){
    let days = ['MON','TUE','WED','THU','FRI','SAT','SUN']
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours <= 12 ? 'AM':'PM';

    let date_today = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    
    date_today = date_today < 10 ? '0' + date_today : date_today;
    month = month < 10 ? '0' + month : month;
    let date =  date_today + '-' + month + '-' + year;

    document.getElementById('date').innerHTML = date;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let day = time.getDay();
    day = days[day];

    document.getElementById('hour').innerHTML = hours

    document.getElementById('minutes').innerHTML = minutes

    document.getElementById('seconds').innerHTML = seconds

    document.getElementById('ampm').innerHTML = ampm

    document.getElementById('day').innerHTML = day

}


setInterval(() => {
    getdatetime();
},1000)