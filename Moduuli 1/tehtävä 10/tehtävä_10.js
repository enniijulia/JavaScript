'use strict';

function rollDice(numDice) {
  let sum = 0;
  for (let i = 0; i< numDice; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }
  return sum;
}

function calculateProbability(numDice, targetSum, numRolls = 10000) {
let successfulRolls = 0;

    for (let i = 0; i<numRolls; i++) {
      const rollSum = rollDice(numDice);
      if (rollSum === targetSum) {
        successfulRolls++;
      }
    }

    const probability = (successfulRolls / numRolls) * 100;
    return probability.toFixed(2);
}

const numDice = parseInt(prompt("Enter the number of dice: "));
const targetSum = parseInt(prompt("Enter the target sum of the dice: "));

const probability = calculateProbability(numDice, targetSum);

document.querySelector('#result').innerHTML = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability}%`;


