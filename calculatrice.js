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
}

function calculateState(event) {
    let firstNumInt = parseFloat(firstNumText);
    let secondNumInt = parseFloat(display.value);
    let result;

/* not parseInt (integer) but parseFloat if I want to have numbers with comma*/

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


    display.value = result;
    
}


function clearState(event) {
  display.value = "";
} 