/**
 * what is async
 * what is await
 * how async awit works bahind the scenes
 * examples of using async.awit
 * Error handling
 * Interrview
 * Async awit vs Promise.then/.catch
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Without Promise

// async function getData() {
//     return "Hi";
    
// }

// const data = getData();
// console.log(data);

// dataPromise.then((res) => console.log(res));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// B . how to return a promise from async

// const p = new Promise((resolve , reject) => {
//     resolve("Promise Resolved Value");
// })

// async function getData() {
//     return p;
    
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Uses of async wait - async wait are used to handle promices

// * How we used to handle promises before


// const p = new Promise((resolve , reject) => {
//     resolve("Promise Resolved Value");
// });

// async function  handlePromise() {
//     const val = await p;
//     console.log(val);
// }

// handlePromise();

// function getData(){
//     p.then((res) => console.log(res));
// }

// getData();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// * how we handle promises now

// A 

// const p = new Promise((resolve , reject) => {
//     setTimeout(() => {
//     resolve("Promise Resolved");},10000)
// });

// async function  handlePromise() {
//     // Code doesnt wait here
//     console.log("Hi everyonee");
//     // Js Engine waits for promise to resolve hence we get "hello guys" first and then "Promise Resolved"

//     const val = await p;
//     console.log("Hello Guys");
//     console.log(val);

//     const val2 = await p;
//     console.log("Hello Guys2");
//     console.log(val2);
// }

// handlePromise();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// B same promise given twice

// const p1 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//         resolve("Promise Resolved");},10000)
//     });

// const p2 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//         resolve("Promise Resolved");},10000)
//     });
    
//     async function  handlePromise() {
//         // Code dosent wait here
//         console.log("Hi everyonee");
//         // Js Engine waits for promise to resolve hence we get "hello guys" first and then "Promise Resolved"
    
//         const val = await p1;
//         console.log("Hello Guys");
//         console.log(val);
    
//         const val2 = await p2;
//         console.log("Hello Guys2");
//         console.log(val2);
//     }
    
//     handlePromise();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// D two promises with different timings are added

// const p1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//     resolve("Promise Resolved");},10000)
// });

// const p2 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//     resolve("Promise Resolved");},20000)
// });

// async function  handlePromise() {
//     // Code dosent wait here
//     console.log("Hi everyonee");
//     // Js Engine waits for promise to resolve hence we get "hello guys" first and then "Promise Resolved"

//     const val = await p1;
//     console.log("Hello Guys");
//     console.log(val);

//     const val2 = await p2;
//     console.log("Hello Guys2");
//     console.log(val2);
// }

// handlePromise();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// C If timing is changes of both promises

// const p1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//     resolve("Promise Resolved");},10000)
// });

// const p2 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//     resolve("Promise Resolved");},5000)
// });

// async function  handlePromise() {
//     // Code dosent wait here
//     console.log("Hi everyonee");
//     // Js Engine waits for promise to resolve hence we get "hello guys" first and then "Promise Resolved"

//     const val = await p1;
//     console.log("Hello Guys");
//     console.log(val);

//     const val2 = await p2;
//     console.log("Hello Guys2");
//     console.log(val2);
// }

// handlePromise();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fetch

// const API_URL = "https://api.github.com/users/maicodee";

// async function handlePromise(){

//     const data = await fetch(API_URL)

//     const jsonValue = await data.json();

//     console.log(jsonValue);
// }

// handlePromise();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Error handling

const API_URL = "https://api.github.com/users/maicodee";

async function handlePromise(){

    try {
        const data = await fetch(API_URL)

        const jsonValue = await data.json();

        console.log(jsonValue);
    }

    catch (err){
        console.log(err);
    }
    
}

handlePromise();