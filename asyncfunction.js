const {brainstormDinner} = require("./module.js");

//the below withConstructor function is function that returns a PROMISE 
//which can also be written like withAsync function
function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

function withAsync(num){
    if(num === 0){
        return 'zero';
    }else {
        return 'not zero';
    }
}

//use the async + await on a promise 
async function whatIsMyDinner(){
    let meal = await brainstormDinner();
    console.log(`my dinner is ${meal}`);
}

whatIsMyDinner();