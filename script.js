let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let y;

let lapbox = document.getElementById("lapbox")

function start()
{
    if(!y)
        {
            y = setInterval(box, 10)
        }
}

function box()
{
   let output=document.getElementById("box");
   output.innerHTML=(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+":"+(ms < 10?"0"+ms:ms);
   ms++;
   if(ms==99)
    {
        ms=0;
        s++;
    }
    if(s==59)
    {
        s=0;
        m++;
    }
    if(m==59)
        {
            m=0;
            h++;
        }
}

function stop()
{
    clearInterval(y);
    y=false;
}

function reset()
{
    h = 0;
    m = 0;
    s = 0;
    ms = 0;

    document.getElementById("box").innerHTML=(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+":"+(ms < 100?"0"+ms:ms);
  

    stop(); 
    lapbox.classList.add("inactive");
    document.getElementById("laps").innerHTML=""; 
}

function lap()
{
    if(lapbox.classList.contains("inactive")){
        lapbox.classList.remove("inactive")
    }

    let l = document.createElement("li");
    l.setAttribute("class" , "lap")
    l.innerHTML=(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+":"+(ms < 10?"0"+ms:ms)+"<br>"; 
    let lp = document.getElementById("laps");
    lp.appendChild(l);
    lp.lastElementChild.scrollIntoView()
}