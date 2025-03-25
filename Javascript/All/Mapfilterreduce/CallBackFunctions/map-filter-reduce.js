const users = [
    { firstNme: "avi", LastName: "adhr", age: 10},
    { firstNme: "ivya", LastName: "Sim", age: 30},
    { firstNme: "yanka", LastName: "Pan", age: 40},
    { firstNme: "uva", LastName: "rin", age: 10}

];

//1. list of full name

// const output = users.map( x => x.firstNme + x.LastName);

// console.log(output);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Filter how many users have same age (as we need only one value we will use reduce)

// const output = users.reduce(function(acc,curr){
//    if(acc[curr.age]){
//     acc[curr.age] = ++acc[curr.age];
//    }
//     else{
//         acc[curr.age] = 1;
//     }

//     return acc;
// }, {})

// console.log(output);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Filter first name if all people whoes age is less than 30

const output = users.filter( x => x.age<30).map((x) => x.firstNme);

console.log(ouput);



