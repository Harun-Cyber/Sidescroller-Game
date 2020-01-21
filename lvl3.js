var hoursHTML = document.querySelector("[data-number-hours]");
var minutesHTML = document.querySelector("[data-number-minutes]");
var secondsHTML = document.querySelector("[data-number-seconds]");

function clockTime(element, rotation){
    element.style.setProperty("--rotation", rotation *360);
}

function update(){
    var date = new Date();
    var seconds = date.getSeconds() / 60;
    var minutes = date.getMinutes() / 60;
    var hours = date.getHours() / 12;

    clockTime(hoursHTML, hours);
    clockTime(minutesHTML, minutes);
    clockTime(secondsHTML, seconds);
}

setInterval(update, 1000);
