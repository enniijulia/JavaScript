'use strict';

function isPrime(number){
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
 return true;
}

const num = parseInt(prompt("Enter an integer to check if it's a prime number: "));

const resultText = isPrime(num) ? `${num} is a prime number.` : `${num} is not a prime number.`;
document.querySelector('#result').innerHTML = resultText;