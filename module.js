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

module.exports.circleArea = circleArea;

module.exports.squareArea = squareArea;

