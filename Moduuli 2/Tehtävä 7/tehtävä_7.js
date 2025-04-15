'use strict'

function rollDice (sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sides = parseInt(prompt("How many sides does the dice of your choice have?"));
const resultList = document.getElementById("results");

while (true) {
  const dice = rollDice(sides);
  const listItem = document.createElement('li');
  listItem.textContent = dice;
  resultList.appendChild(listItem);
  if (dice === sides) break;
}