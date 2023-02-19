 //jss
 window.onload = function()
 {
 var second = 00;
 var subsec = 00;
 var appendsecond = document.getElementById("second");
 var appendsubsecond = document.getElementById("subsec");
 var buttonstart = document.getElementById("button_start");
 var buttonstop = document.getElementById("button_stop");
 var buttonreset = document.getElementById("button_reset");
 var interval;

 buttonstart.onclick = function() {
    clearInterval(interval);
    interval = setInterval(starttimer,10);
 }

 buttonstop.onclick = function() {
    clearInterval(interval);
 }
 buttonreset.onclick = function() {
    clearInterval(interval);
    second = 00;
    subsec = 00;
    appendsecond.innerHTML = second;
    appendsubsecond.innerHTML = subsec;
 }

function starttimer()
 {
    subsec++;
    if (subsec<9)
    {
        appendsubsecond.innerHTML="0"+subsec;
    }

    if(subsec>9)
    {
        appendsubsecond.innerHTML=subsec;
    }

    if(subsec>99)
    {
        second++;
        appendsecond.innerHTML="0"+second;
        subsec= 0;
        appendsubsecond.innerHTML="0" +subsec;
    }
    if(second>9)
    {
        appendsecond.innerHTML=second;
    }
 }
 }
