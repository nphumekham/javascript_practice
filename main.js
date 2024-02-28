import {changeText,  changeToFunkyColor} from "./module.js";
const header = document.getElementById("header");

changeText(header, "I did it!");

setInterval(()=> {
changeToFunkyColor(header);
}, 200);