'use strict';

const names = []

for (let i=0; i<5; i++) {
  const input = prompt(`Enter a name of dog ${i +1}: `);
  names.push(input);
}

const target = document.querySelector('#target');

for (const name of names) {
  const li = document.createElement('li');
  li.textContent = name;
  target.appendChild(li);
}