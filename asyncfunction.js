const {brainstormDinner, shopForBeans, soakTheBeans, cookTheBeans, cookBeanSouffle, 
    cookBeans, steamBroccoli, cookRice, bakeChicken} = require("./module.js");

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

//whatIsMyDinner();

//make getBeans an async function and use await on the promise function
//shopForBean so that 3. do not get executed before number 2. is completed
async function getBeans() {
    console.log(`1. Heading to the store to buy beans...`);
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
  }
getBeans();

//another async + await 
async function makeBeans(){
    const type = await shopForBeans();
    const isSoft = await soakTheBeans(type);
    const dinner = await cookTheBeans(isSoft);
    console.log(dinner);
}
makeBeans();

//async function with TRY and CATCH
async function hostDinnerParty(){
    try {
      const resolvedValue = await cookBeanSouffle();
      console.log(`${resolvedValue} is served!`);
    } catch (error){
      console.log(error);
      console.log(`Ordering a pizza!`);
    }
  }
  
  hostDinnerParty();

  //use await later 
  async function serveDinner(){
    const vegetablePromise = steamBroccoli();
    const starchPromise = cookRice();
    const proteinPromise = bakeChicken();
    const sidePromise = cookBeans();
    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`); 
  };
  
  serveDinner();
  
  //use promise.all
  async function serveDinnerAgain(){
    const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
  
    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
  }
  
  serveDinnerAgain();