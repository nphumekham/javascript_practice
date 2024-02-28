/* PROMISE - a proxy for a value not necessarily known when the promise is created. 
It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
---- 3 states of PROMISE are 
---- 1. pending
---- 2. fulfilled
---- 3. rejected 
*/

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
