

const parent = React.createElement("div", {id: "parent"} , 
    React.createElement("div", {id: "child"} ,
        React.createElement("h1", {id: "child"} )

const heading = React.createElement(
    "h1", 
    {
        id: "heading" , xyz: "abc"}, 
         "Hello Word from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);