const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise.then(function(orderID){
    console.log("Order ID: ", orderID);
    return orderID;
}).then(function(orderID){
    return proceedToPayment(orderID);
}).then (function(paymentInfo){
    console.log("Payment Info: ", paymentInfo);
}).catch(function(err){
    console.log("Error: ", err.message);
});

function createOrder(cart){
     const pr = new Promise(function(resolve, reject){
        if(isValidCart(cart))
        {
            const orderID = "1223";
            if(orderID)
            {
                resolve(orderID);
            }
            else{
                const err = new Error("Invalid Order");
                reject(err);
            }
        }
        else{
            const err = new Error("Invalid Cart");
            reject(err);
        }
     })
     return pr;
}

function isValidCart(cart){
    return Array.isArray(cart) && cart.length > 0;
}

function proceedToPayment(orderID){
    const pr = new Promise(function(resolve, reject){
        resolve(`Payment Info is ${orderID}`);
    });
    return pr;
}