'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const num = parseInt(prompt("Define number of dice rolls."), 10);
let result = 0;

for (let i = 0; i < num; i++) {
  result += getRandomInt(6) + 1;
}

document.querySelector('#target').innerHTML = `The dice was rolled ${num} times and the sum of the results of the dice rolls is ${result} `;