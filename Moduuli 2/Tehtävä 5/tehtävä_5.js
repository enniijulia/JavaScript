'use strict';

const numbers = [];

while (true) {
  const input = parseInt(prompt("Enter a number."));

  if (numbers.includes(input)) break; {
    console.log("This number has already been given.");
    numbers.push(input);
  }
}

numbers.sort((a, b) => a - b);

console.log(numbers);