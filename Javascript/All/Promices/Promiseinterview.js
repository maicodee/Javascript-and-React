// 1. Promise.all -  Used to do multiple API calls (Fetching User Data from Multiple APIs for any Social media app)
// A
// const p1 = new Promise((resolve , reject) =>{
//     setTimeout(() => resolve("p1 success"), 3000);
// });

// const p2 = new Promise((resolve , reject) => {
//     setTimeout(() => resolve("p2 success"), 1000);
// });

// const p3 = new Promise((resolve , reject) => {
//     setTimeout(() => resolve("p3 success"), 2000);
// });


// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res);
// });

////////////////////////////////////////////////////////////

// B

// const p1 = new Promise((resolve , reject) =>{
//     setTimeout(() => resolve("p1 success"), 3000);
// });

// const p2 = new Promise((resolve , reject) => {
//     setTimeout(() => reject("p2 failed"), 1000);
// });

// const p3 = new Promise((resolve , reject) => {
//     setTimeout(() => resolve("p3 success"), 2000);
// });


// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Promise.allSettled (Wait for all tos settle (wherether success or fail))

// const p1 = new Promise((resolve , reject) =>{
//     setTimeout(() => resolve("p1 success"), 3000);
// });

// const p2 = new Promise((resolve , reject) => {
//     setTimeout(() => resolve("p2 success"), 1000);
// });

// const p3 = new Promise((resolve , reject) => {
//     setTimeout(() => resolve("p3 success"), 2000);
// });


// Promise.allSettled([p1, p2, p3]).then(res => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


///////////////////////////////////////////////

// B

// const p1 = new Promise((resolve , reject) =>{
//     setTimeout(() => resolve("p1 success"), 3000);
// });

// const p2 = new Promise((resolve , reject) => {
//     setTimeout(() => reject("p2 success"), 1000);
// });

// const p3 = new Promise((resolve , reject) => {
//     setTimeout(() => reject("p3 failed"), 2000);
// });


// Promise.allSettled([p1, p2, p3]).then(res => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3 Promise.any (First settle)

// A - any of which is settled

// const p1 = new Promise((resolve , reject) =>{
//     setTimeout(() => reject("p1 Fail"), 3000);
// });

// const p2 = new Promise((resolve , reject) => {
//     setTimeout(() => reject("p2 success"), 1000);
// });

// const p3 = new Promise((resolve , reject) => {
//     setTimeout(() => resolve("p3 success"), 2000);
// });


// Promise.any([p1, p2, p3]).then(res => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

////////////////////////////////////////////////////////////

// B - aggregate error

const p1 = new Promise((resolve , reject) =>{
    setTimeout(() => reject("p1 Fail"), 3000);
});

const p2 = new Promise((resolve , reject) => {
    setTimeout(() => reject("p2 success"), 1000);
});

const p3 = new Promise((resolve , reject) => {
    setTimeout(() => reject("p3 failed"), 2000);
});


Promise.any([p1, p2, p3]).then(res => {
    console.log(res);
})
.catch((err) => {
    console.log(err.error);
    console.log(err.errors);  // How to get error array it has to be an object
});

////////////////////////////////////////////////////////////////////////////////////////
