const daysStarted = '21 Jul 2020'
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countdown(){
    const daysStartedDate = new Date(daysStarted);
    const currentDate = new Date();

    const totalSeconds = Math.floor((currentDate - daysStartedDate) / 1000);
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor((totalSeconds/3600) % 24);
    const mins = Math.floor(((totalSeconds/60)) % 60);
    const seconds =Math.floor(totalSeconds % 60);
    console.log(days, hours, mins, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins
    secondsEl.innerHTML = seconds;
}
function formatTime(time){
    return time < 10 ? `0${time}`:time;
}
//init call
countdown();

setInterval(countdown, 1000);
