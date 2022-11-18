let min=25;
let interval;
// let min=25;
let sec=0;

setInterval({fuct },1000);
//document.getElementsByClassName("headertag")[0].innerHTML=`${min} : 0${sec}`;
function startclock()
{
    
     interval=setInterval( ()=>{
        document.getElementsByClassName("headertag")[0].innerHTML=`${min} : ${sec}`;
      if(sec===0)
      { 
        if(min==0)
      {
        clearInterval(interval);
        alert("TIMEOUT");
      }
      else{
        sec=59;
        min--;
      }

      }
      else{
        sec--;
      }
      if(min<9){
        if(sec<9){document.getElementsByClassName("headertag")[0].innerHTML=`0${min} : 0${sec}`;}
        else{document.getElementsByClassName("headertag")[0].innerHTML=`0${min} : ${sec}`;}
    }
    else if(sec<9){document.getElementsByClassName("headertag")[0].innerHTML=`${min} : 0${sec}`;}
      else{
        document.getElementsByClassName("headertag")[0].innerHTML=`${min} : ${sec}`;}
    
    } ,1000);  
}

function stopclock()
{
    clearInterval(interval);
}
function restart(){
    min=25;sec=00;
    if(min<9){
        if(sec<9){document.getElementsByClassName("headertag")[0].innerHTML=`0${min} : 0${sec}`;}
        else{document.getElementsByClassName("headertag")[0].innerHTML=`0${min} : ${sec}`;}
    }
    else if(sec<9){document.getElementsByClassName("headertag")[0].innerHTML=`${min} : 0${sec}`;}
      else{
        document.getElementsByClassName("headertag")[0].innerHTML=`${min} : ${sec}`;}

}