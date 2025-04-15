'use strict';

function even(array) {
  let evenNumbers = [];
    for (let i = 0; i<array.length; i++) {
      if (array[i] % 2 === 0) {
        evenNumbers.push(array[i]);
      }
    }
  return evenNumbers;
}

const numbers = [2,7,4];
const output = even(numbers);

console.log(`Even numbers`, output);
console.log(`Original`, numbers);