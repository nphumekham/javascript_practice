// practice exporting functions - modules
const PI = Math.PI;

function circleArea(radiusLength) {
  return PI*radiusLength*radiusLength;
}

function squareArea(sideLength){
  return sideLength*sideLength;
}

function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}

function changeToFunkyColor(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

//below is for promise practice
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};
//this is a PROMISE that takes in 1param ORDER
const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every(item => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 1000);
  })
};

module.exports = { checkInventory };

module.exports.circleArea = circleArea;

module.exports.squareArea = squareArea;

