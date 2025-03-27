setTimeout(function(){
    console.log("Namaste");
},5000)


const cart =["shoes" , "pants" ,"kurta"];

api.craeteOrder(cart , function(){
    api.proceedToPayment(
        function(){
            api.showOrderSummary(function(){
                api.updateWallet()
            }
            )
        })
})


///////////////////////////////////////////////////////////////////////////////////////////////

// Inversion of control ( We loose cotrol over our code while using callback)

// Issues with callback
//1. Callbackhell
//2. inversion of conntrol