console.log("start")

setTimeout(function cbT(){
    console.log("CB setTimeout");

},5000);

fetch("https://api.netflix.com").then(function cbf(){
    console.log("CB Netflix");
});

console.log("End");console.log("start");

setTimeout(() => {
    console.log("CB setTimeout");
}, 5000);

fetch("https://api.netflix.com")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log("CB Netflix", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

console.log("End");