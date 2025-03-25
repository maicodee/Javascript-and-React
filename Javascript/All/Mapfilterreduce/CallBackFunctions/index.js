const arr = [5, 1, 3, 2, 6];

// Double 

// Triple 

// Binary 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Map

// const output = arr.map(function binary(x) {
//     return x.toString(2);
// });

// console.log(output);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Filter

//find odd values in array 

// function isOdd(x){
//     return x % 2;
// }

// const output = arr.filter(isOdd);
// console.log(output);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  3. Reduce

// **Find sum or max

// * Normal code

// function findSum (arr){
//     let sum = 0;
//     for( let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr));

//  * Using reduce

// const output = arr.reduce(function(acc, curr){  // curr = current value in array , acc = we are accoumumating our sum
//     return acc + curr;
// } ,0);

// console.log(output);


// **Find maximum value in array using reduce

const output = arr.reduce(function(acc, curr){  // curr = current value in array , acc = we are accoumumating our sum

        if(curr > acc){
            acc = curr;
        }
        return max;
} ,0);

console.log(output);

