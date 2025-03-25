// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
    
//     console.log("Hi vaish");
// }

// x();

///////////////////////////////////////////////////////////////////////

// function x(){
//     for( var i =1; i<=5; i++){
//     setTimeout(function(){
//         console.log(i);
//     },3000);

// }
    
//     console.log("Hi vaish");
// }

// x();

///////////////////////////////////////////////////////////////////////

// ex. javascript doesnt wait for programmed time

// console.log("start");

// setTimeout(function cb(){        
//     console.log("callback"); 
// } ,5000);

// console.log("End");

// let starte = new Date().getTime();
// let endDate = stratDate;
// while(endDate < startdate000 + 10000){
//     endDate = new Date().getTime();
// }

// console.log("while expires");



///////////////////////////////////////////////////////////////////////


// ex: 0 setTimeout

console.log("start");

setTimeout(function cb(){
    console.log("callback"); 
} ,0);

console.log("End");