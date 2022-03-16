function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



let nomi=["Maria","Matteo","Alessandra","Vittoria","Giuseppe"];
let cognomi=["Fobert","Contrafatto","Black","Polchinski","Maruska"];
let i;
let j ;
let lista=[];
let y;

for(y=0; y<=nomi.length; y++){
    i = getRandomInt(nomi.length);
    j = getRandomInt(nomi.length);
    

    lista = `${nomi[i]}  ${cognomi[j]}`;
    console.log(lista);
    
  
    
    
    
}

