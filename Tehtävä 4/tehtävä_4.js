'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const name = prompt("What is your name? ");
const houseNumber = getRandomInt(4);
let house = "";

if (houseNumber === 0) {
  house = "Gryffindor";
} else if (houseNumber === 1) {
  house = "Slytherin";
} else if (houseNumber === 2) {
  house = "Hufflepuff";
} else if (houseNumber === 3) {
  house = "Ravenclaw";
}

document.querySelector('#houseNum').innerHTML =(name + ", you are " + house + ".")
