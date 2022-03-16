let array=[1,2,3,4,5,6,7,8,9,10,11,12,13];
let somma=0;
let i;



for(i = 0; i <= array.length; i++){
    if((i % 2) == 0 ){
        somma+=array[i]; 
    }

}

document.getElementById("container").innerHTML=somma;