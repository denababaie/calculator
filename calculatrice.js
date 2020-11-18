/* first part */

const html = document.querySelector("html");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const calculator = document.createElement("div");

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalTo = document.querySelector(".equal-to");
const clear = document.querySelector(".clear");




/* linken van html met js */


/* clicks */
for (let i = 0; i < numbers.length; i++) {
  numbers[i].onclick = numberState;   
} 

for (let i = 0; i < operators.length; i++) {
  operators[i].onclick = operatorState;
}

equalTo.onclick = calculateState;


clear.onclick = clearState;


/* functions */
function numberState(event) {
  let buttonText = event.target.textContent;
  let displayText = display.value;
  let newText = displayText + buttonText;
  display.value = newText;
}
/* ! do not use var */

let firstNumText;
let operator;
function operatorState(event) {
  firstNumText = display.value;
  operator = event.target.textContent;
  display.value = "";
} /* use display value to display what i want when clicking on a certain operator */

function calculateState(event) {
    let firstNumInt = parseFloat(firstNumText);
    let secondNumInt = parseFloat(display.value);
    let result;

/* changed parseInt (integer) to parseFloat! and got numbers with commas*/

    if (operator == "+") {
      result = firstNumInt + secondNumInt;
    }

    if (operator == "-") {
      result = firstNumInt - secondNumInt;
    }
    if (operator == ":") {
      result = firstNumInt / secondNumInt;
    }
    if (operator == "x") {
      result = firstNumInt * secondNumInt;
    }

   if (operator == "^") {
      result = firstNumInt ** secondNumInt;
    } 
    /* "**" is the equivalent of "^" in js*/ 

    if (operator == "%") {
      result = (firstNumInt/100) * secondNumInt;
   }

    display.value = result;
    
}


function clearState(event) {
  display.value = "";
} 

function deleteState(event) {
  display.value = "";
} 