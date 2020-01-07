//Coloca os Bônus_penalidades dos atributos
//Puts bonus_penalties on Old Dragon attributes
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



