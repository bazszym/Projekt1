var deadline = new Date("2018/10/21 23:59:59").getTime();

var countdown = setInterval(()=>{
    var current = new Date().getTime();
    var timeLeft = deadline - current;
    var days = Math.floor(timeLeft / (1000*60*60*24));
    var hours = Math.floor((timeLeft%(1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((timeLeft % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("dzien").innerHTML = days;
    document.getElementById("godzina").innerHTML = hours;
    document.getElementById("minuta").innerHTML = minutes;
    document.getElementById("sekunda").innerHTML = seconds;

    if(timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;
    }
}, 1000);
