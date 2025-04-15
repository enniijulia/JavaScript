'use strict';
const num1 = parseInt(prompt('enter an integer.'));
const num2 = parseInt(prompt('enter an integer.'));
const num3 = parseInt(prompt('enter an integer.'));

const sum = num1 + num2 + num3;
const average = sum/3;
const product = num1 * num2 * num3;

document.querySelector('#target').innerHTML = `Sum of the numbers is ${sum} <br> Average of the numbers is ${average.toFixed(2)} <br> Product of the numbers is ${product}`;