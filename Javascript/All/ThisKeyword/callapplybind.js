let name = {
    firstNmae: "Braddly",
    lastName: "Cooper",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

letPrintFullName = function (hometown , state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown " , " + )
}

printFullName.call(name , "Goa" , "Goa");

name.printFullName();

let name2 = {
    firstName: "Keanu",
    lastName: "Reeves",
}

// functio  borrowing
printFullName.call(name2 , "Delhi" , "Maharashtra");


//////////////////////////////////////////////////////////////////////////////////////////////////////////

let name = {
    firstNmae: "Braddly",
    lastName: "Cooper",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

letPrintFullName = function (hometown , state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown " , " + )
}

printFullName.call(name , "Goa" , "Goa");

name.printFullName();

let name2 = {
    firstName: "Keanu",
    lastName: "Reeves",
}

// functio  borrowing
printFullName.call(name2 , "Delhi" , "Maharashtra");