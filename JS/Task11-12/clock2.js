var clockContent = function (h, m, s) {
    var hZero = addZeroBefore(h);
    var mZero = addZeroBefore(m);
    var sZero = addZeroBefore(s);
    return  hZero + h + ":" + mZero + m + ":" + sZero + s;
};

function addZeroBefore(time) {
    return time < 10? "0": ""
}

clock2.style.height = window.innerHeight + "px";

setInterval(function () {
    var now = new Date();

    var hours = now.getUTCHours();
    var min = now.getUTCMinutes();
    var sec = now.getUTCSeconds();
    var block = clock2.querySelector("div");
    var bgColor;
    block.innerHTML = clockContent(hours, min, sec);
    if (0 <= hours && hours < 6 ){
        bgColor = "#191970";
    }
    else if(6 <= hours && hours < 12 ){
        bgColor = "#61b2ff";
    }
    else if(12 <= hours && hours < 18 ){
        bgColor = "#87CEFA";
    }
    else {
        bgColor = "#83a2fa";
    }
    clock2.style.backgroundColor = bgColor;

}, 1000);
