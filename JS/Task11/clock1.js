clock1.style.height = window.innerHeight + "px";

var currentTime1 = setInterval(function () {
    var today = Date();
    var time = today.substr(16, 8);
    var hours = Number(today.substr(16, 2));

    var block = clock1.querySelector("div");
    var bgColor;
    block.innerHTML = time;
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
    clock1.style.backgroundColor = bgColor;

}, 1000);




