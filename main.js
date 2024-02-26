import {changeText,  changeToFunkyColor} from "./module.js";
const header = document.getElementById("header");

// call changeText here
changeText(header, "I did it!");

setInterval(()=> {
  
  // call changeToFunkyColor() here
changeToFunkyColor(header);
}, 200);