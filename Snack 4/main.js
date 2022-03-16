function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let uno=[1,2,3,4,5];
let due=[6,7,8,9,10,11,12,13];
let i;


if(uno.length > due.length){
    
   
    for(i=due.length; i<=uno.length; i++){
     due[i]=getRandomInt(10);
    }

     console.log(due);
} else if (uno.length < due.length){
    for (i = uno.length; i <= due.length; i++) {
        uno[i] = getRandomInt(10);
        
    }
    console.log(uno);

}