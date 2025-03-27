// How to handle async code using callback

// const cart = ["shoes" , "pants" ,"kurta"];

// Without using promices

// createOrder(cart , function(orderID){
//     proceedToPayment(orderID);
// });


// With using promises

// const promice = craeteOrder(cart);

// {data: undefined}

// whenerever promice is executed it returns as promice which has empty object and whenever we can data it returns 

// promise.then(function(orderID){
//     proceedToPayment(orderID);
// });


//////////////////////////////////////////////////////////////////////////////////

// const GITHUB_API = "https://api.github.com/users/maicodee";

// const user = fetch(GITHUB_API);


// console.log(user);

// user.then(function(data){
//     console.log(data);
// });


//////////////////////////////////////////////////////////////////////////////////

const cart =["shoes" , "pants" ,"kurta"];

api.craeteOrder(cart , function(){
    api.proceedToPayment(
        function(){
            api.showOrderSummary(function(){
                api.updateWallet()
            })
        })
})

/////////////////////////////////////////////////////////////////////////////////////

//Promice chaining (which helps to get out of callback hell)
createOrder(cart)
.then(function (orderID){
  return proceedToPayment(orderID);
})
.then(function (PamentInfo){
   return showOrderSummary(PamentInfo);
})
.then(function (PamentInfo){
   return updateWalletBalance(PamentInfo);
});