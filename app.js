const x = document.getElementById("hour");

const y = document.getElementById("minute");
const z = document.getElementById("second");
const m = document.getElementById("A");
const n = document.getElementById("P");



function myClock(){
  let d = new Date();
  
  
  let e = d.getHours(); 
  let b = d.getMinutes();
  let c = d.getSeconds();
  
  if (12 < e){var j = e -12;
    var k = "PM"  }
    else if(e===0){var j = e + 12 ; var ku= "AM" }
    else { var ku= "AM";
      var j = e;
    };

  
  hour.textContent = j;
  minute.textContent = " "+b;
  second.textContent = ""+c;
  A.textContent = k;
  P.textContent = ku;
};

setInterval (myClock, 1000)