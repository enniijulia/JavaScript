'use strict';

const year = parseInt(prompt("Enter a year"));
let yr = "";

if ((year%4===0) && (year%100!==0)) {
  yr = (", is leap year");
} else if (year%4000===0) {
  yr =(", is a leap year");
} else {
  yr = (", is not a leap year");
}

document.querySelector('#leap').innerHTML = year + yr;