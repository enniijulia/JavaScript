'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const resultsList = document.getElementById("results");

while (true) {
  const dice = rollDice();
  const listItem = document.createElement("li");
  listItem.textContent = dice;
  resultsList.appendChild(listItem);

  if (dice === 6) break;
}
