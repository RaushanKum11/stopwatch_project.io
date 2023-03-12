// ACCEESSING HTML ELEMENTS 
const btnArr =document.getElementsByClassName("btn");
const dpTime =document.getElementsByClassName("time");
let millisecond =document.getElementById("millisecond");
let seconds = document.getElementById("second");
let minute=document.getElementById("minute");
let orderedList = document.getElementById("orderedList");
let outer=document.getElementById("outercircle")

// VARIABLES USED 
let listArr=[];
let count = 0;
let timer;
 var mili=parseInt(millisecond.innerText);
    var sec = parseInt(second.innerText);
    var min= parseInt(minute.innerText);
 
    
    // button events 

for(let i = 0 ; i<btnArr.length;i++){
btnArr[i].addEventListener("click",clickEvent);
}


function clickEvent(){

      let btn_clicked=this.getAttribute('value');

      if(btn_clicked==1){// reset
        mili=00;
        sec=00;
        min=0;
        count=0;
         clearInterval(timer);
          outer.classList.remove("animation-bg");
          btnArr[1].innerText="Start";
            dpTime[0].innerText="00";
            dpTime[1].innerText=`00`;
            dpTime[2].innerText=`0`;
            while(orderedList.childElementCount !=0){
                 orderedList.removeChild(orderedList.firstElementChild); 
            }

      }else if(btn_clicked==2){//start
        if(count++==0){
            btnArr[1].innerText="Stop";
            outer.classList.add("animation-bg");
          timer =  setInterval(interval,10);
        }else{
            btnArr[1].innerText="Start";
            count=0;
            outer.classList.remove("animation-bg");
             
            clearInterval(timer);
        }
      }else if(btn_clicked==3){//lap
      
        const toadd=document.createElement('li');
        toadd.innerText=`${min}min : ${sec}sec : ${mili}ms`;
      

        orderedList.append(toadd);

      }else if(btn_clicked==4){//clear all

           while(orderedList.childElementCount !=0){
                 orderedList.removeChild(orderedList.firstElementChild); 
            }
      }

}

   
function interval(){

     mili=mili+1;
     if(mili<=99){
     millisecond.innerText=`${mili}`;
     }else{
        mili=0;
        sec=sec+1;
        
        if(sec >=60){
            sec = 00;
            min=min+1;
            if(min<=9){
            minute.innerText=`0${min}`;
            }else{
            minute.innerText=`${min}`;
            }
        }
         if(sec<=9){
            seconds.innerText=`0${sec}`;
            }else{
        seconds.innerText=`${sec}`;

            }
     }
}
