window.onload = function(){
    var tens = 00;
    var seconds = 00;
    var startBtn = document.querySelector('#startBtn');
    var stopBtn = document.querySelector('#stopBtn');
    var resetBtn = document.querySelector('#resetBtn');
    var appendTens = document.querySelector('#tens');
    var appendSeconds = document.querySelector('#seconds');
    var Interval ;

    startBtn.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
    } 

    stopBtn.onclick = function(){
        clearInterval(Interval);
    }

    resetBtn.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer(){
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + tens;
        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds; 
        }
    }

}