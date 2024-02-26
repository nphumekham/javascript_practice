// practice using require module

/* require the entire module
const exportmodule = require('./exportmodule.js');
const myUnitCircle = exportmodule.circleArea(1);
*/

//require just a function in a specific module
const { circleArea } = require('./module');
const myUnitCircle = circleArea(1);

console.log(`${myUnitCircle} is the area of my unit circle, utilizing the require/ export module`);