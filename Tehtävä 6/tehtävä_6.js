'use strict';

const answer = confirm("Should I calculate the aquare root?");
let result = "";
const num = parseInt(prompt("Enter a number."));

if (answer && num>=0) {
  result = `The quare root of ${num} is ${Math.sqrt(num)}.`;
}
else if (num<0) {
  result = "The square root for negative numbers is not defined.";
} else {
  result = "The square root is not calculated. ";
}

document.querySelector('#root').innerHTML = result;