'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  const input = parseInt(prompt(`Enter number ${i + 1}:`));
  numbers.push(input);
}

numbers.reverse();

console.log(numbers);

