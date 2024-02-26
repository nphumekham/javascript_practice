// practice exporting functions - modules
const PI = Math.PI;

function circleArea(radiusLength) {
  return PI*radiusLength*radiusLength;
}

function squareArea(sideLength){
  return sideLength*sideLength;
}

module.exports.circleArea = circleArea;

module.exports.squareArea = squareArea;

