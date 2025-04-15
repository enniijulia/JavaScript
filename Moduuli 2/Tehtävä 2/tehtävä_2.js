'use strict';

const participants = parseInt(prompt("How many participants?"));

const names = [];

for (let i = 0; i<participants; i++) {
  const input = prompt(`Enter name of participant ${i + 1}:`);
  names.push(input);
}

const target = document.querySelector('#target');

for (const name of names) {
  const li = document.createElement('li');
  li.textContent = name;
  target.appendChild(li);
}
