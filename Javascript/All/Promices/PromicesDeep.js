// Creating promices , Chaining nad Error handling


const cart =["shoes" , "pants" ,"kurta"];


createOrder(cart)
.then(function(orderID){
    console.log(orderID)
    return orderID;
})
.then(function(orderID){
    return proceedToPayment(orderID);   
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function (err){
    console.log(err.message);
})


/////////////////////////////////////////////////////////////////////////////////



function createOrder(cart){
    
    const promise = new Promise(function(resolve, reject){

        // createOrder 
        // ValidateCart
        // OrderID 

        if(!validateCart(cart)){
            const err = new Error("Card is not valid");
            reject(err);
        }

        const orderID = "12345";
        if(orderID){
            setTimeout(function(){
                resolve(orderID);
            }, 5000);           
        }

    });

    return promise;
}


// how to handle the rejection case write a catch 


function proceedToPayment (orderID){
    return new Promise(function(resolve,reject){
        resolve("payment successfull");
    })
}

function validateCart(cart){
    return true;  // if we write false here and it will be a promise rejection case
}
