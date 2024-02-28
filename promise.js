/* PROMISE - a proxy for a value not necessarily known when the promise is created. 
It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
---- 3 states of PROMISE are 
---- 1. pending
---- 2. fulfilled
---- 3. rejected 
*/
const {checkInventory, processPayment, shipOrder} = require("./module.js");

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
};

//this is a function that returns a PROMISE 
//this is how to create generic function thats take 0 param
const orderSunglasses = () => {
    return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise);

//this is just a function that logs a string
const usingSTO = () => {
    console.log("this is inside usingSTO.");
}

//practice using setTimeout -- takes in 2 params (x, time in millisec)
setTimeout(usingSTO, 3000);

//use the PROMISE from the module file
const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 79.82
  };

//create success and failure handlers for the promise
const successHandle = (successMessage) => {
    console.log(successMessage);
}

const failureHandle = (failureMessage) => {
    console.log(failureMessage);
}

//try the promise from another module + use THEN + use handlers
//checkInventory(order).then(successHandle, failureHandle);

//cleaner way to is to use THEN on successful case and CATCH on failure case
//checkInventory(order).then(successHandle).catch(failureHandle);

checkInventory(order).then((resolvedValue) => {
    return processPayment(resolvedValue);
}).then((resolvedValue) => {
    return shipOrder(resolvedValue);
}).then((successMessage) => {
    console.log(successMessage);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

