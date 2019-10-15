//Coloca os Bônus_penalidades dos atributos
function mod(){
var x = document.getElementById('For').value;
var y = document.getElementById('modfor');

if(x==1){y.value = -5}
    else if(x==2 || x==3) {y.value = -4;}
else if(x==4 || x==5){y.value = -3;}
else if (x==6 || x==7) {y.value = -2;}
else if (x==8 || x==9) {y.value = -1;}
else if (x==10 || x==11) {y.value = 0;}
else if (x==12 || x==13) {y.value = 1;}
else if (x==14 || x==15) {y.value = 2;}
else if (x==16 || x==17) {y.value = 3;}
else if (x==18 || x==19) {y.value = 4;}
else if (x==20) {y.value = 5;}
else{
        y.value = "";
    }
}
input.onblur = mod;

//Rola 3d6 para os seis atributos
function joga(){
        let min = 1;
        let max = 7;
        document.getElementById("a").innerHTML = (Math.floor(Math.random() *(max-min)+min)) + (Math.floor(Math.random() *(max-min)+min)) + (Math.floor(Math.random() *(max-min)+min)) ;
		document.getElementById("b").innerHTML = (Math.floor(Math.random() *(max-min)+min)) + (Math.floor(Math.random() *(max-min)+min)) + (Math.floor(Math.random() *(max-min)+min)) ;
        document.getElementById("c").innerHTML = (Math.floor(Math.random() *(max-min)+min)) + (Math.floor(Math.random() *(max-min)+min)) + (Math.floor(Math.random() *(max-min)+min)) ;
        document.getElementById("d").innerHTML = (Math.floor(Math.random() *(max-min)+min)) + (Math.floor(Math.random() *(max-min)+min)) + (Math.floor(Math.random() *(max-min)+min)) ;
        document.getElementById("e").innerHTML = (Math.floor(Math.random() *(max-min)+min)) + (Math.floor(Math.random() *(max-min)+min)) + (Math.floor(Math.random() *(max-min)+min)) ;
        document.getElementById("f").innerHTML = (Math.floor(Math.random() *(max-min)+min)) + (Math.floor(Math.random() *(max-min)+min)) + (Math.floor(Math.random() *(max-min)+min)) ;
    }

//rola dados separados
function dCem(){
  let min = 1;
  let max = 101;
  document.getElementById("r100").innerHTML = Math.floor(Math.random() *(max-min)+min);
var dcem = document.getElementById("r100").innerHTML = Math.floor(Math.random() *(max-min)+min); 

 if( dcem == 100 ){document.getElementById("r100").innerHTML = ("100! GG!"); }

  

}

function dVinte(){
  let min = 1;
  let max = 21;
  document.getElementById("r20").innerHTML = Math.floor(Math.random() *(max-min)+min);
  var dvinte = document.getElementById("r20").innerHTML = Math.floor(Math.random() *(max-min)+min); 

 if( dvinte == 20 ){document.getElementById("r20").innerHTML = ("20! GG!"); }
 
}


function dDoze(){
  let min = 1;
  let max = 13;
  document.getElementById("r12").innerHTML = Math.floor(Math.random() *(max-min)+min);
  var ddoze = document.getElementById("r12").innerHTML = Math.floor(Math.random() *(max-min)+min); 

 if( ddoze == 12 ){document.getElementById("r12").innerHTML = ("12! GG!"); }

}

function dDez(){
  let min = 1;
  let max = 11;
  document.getElementById("r10").innerHTML = Math.floor(Math.random() *(max-min)+min);
  var ddez = document.getElementById("r10").innerHTML = Math.floor(Math.random() *(max-min)+min); 

 if( ddez == 10 ){document.getElementById("r10").innerHTML = ("10! GG!"); }
 
}

function dOito(){
  let min = 1;
  let max = 9;
  document.getElementById("r08").innerHTML = Math.floor(Math.random() *(max-min)+min);
  var doito = document.getElementById("r08").innerHTML = Math.floor(Math.random() *(max-min)+min); 

 if( doito == 8 ){document.getElementById("r08").innerHTML = ("8! GG!"); }
 
}

function dSeis(){
  var min = 1;
  var max = 7;
  
var dseis = document.getElementById("r06").innerHTML = Math.floor(Math.random() *(max-min)+min); 

 if( dseis == 6 ){document.getElementById("r06").innerHTML = ("6! GG!"); }
 
}

function dQuatro(){
  var min = 1;
  var max = 5;
  
var dquatro = document.getElementById("r04").innerHTML = Math.floor(Math.random() *(max-min)+min); 

 if( dquatro == 4 ){document.getElementById("r04").innerHTML = ("4!GG!");}

}



var text = "";
var i;
while (i = 0; i < 10; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
