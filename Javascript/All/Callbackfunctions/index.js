// What is Callback function in javascript

// Javascript is a synchronous and single thereded language

// Blocking the main thread

// Power of callback

setTimeout(function(){
    console.log("Timer");
} , 5000);


function x(y){
console.log("x");
y();
}
x(function y(){
    console.log("y");

})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Deep about event listners
function attacheventlistner(){
let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button clicked" ,count++);
}); 
}

attacheventlistner();


// Closure demo with event listners

// Scope Demo with event listners

// Garbage Collection and removeEventListners
// When functions are not used they are in Garbage collectors and we should avoid using removeEventListners as it uses closure
// to store varible and hence make it heavy