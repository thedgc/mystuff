function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let timeOfDay = partDay();

    function partDay() {
        if (h > 12) {
            return "PM";
        } else {
            return "AM";
        }
    }

    m = checkTime(m);
    s = checkTime(s);
    h = checkHour(h)
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + " " + timeOfDay;
    setTimeout(startTime, 1000);

}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

function checkHour(i, a) {
    if (i > 12) { i = i - 12 };
    return i;
}
startTime();

function changing() {
    var button = document.getElementById("push");
    var back = document.getElementById("home");


    button.onclick = function() {
        if (back.className == "change") {
            back.className == "header";
        } else {
            back.className == "change";
        }
    }
}
changing();