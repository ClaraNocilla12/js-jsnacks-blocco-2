let numero = parseInt(prompt("Inserisci un numero"));

do{
    if (isNaN(numero)){
    numero = parseInt(prompt("Per favore inserisci un numero"));
    }
} while (isNaN(numero));

if(numero % 2 == 0){
    document.getElementById("container").innerHTML=numero;
}else{
    document.getElementById("container").innerHTML = numero+1;
}