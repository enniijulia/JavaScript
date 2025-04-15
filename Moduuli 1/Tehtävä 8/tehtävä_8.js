'use strict';

const first = parseInt(prompt("Enter the fisrt year."));
const last = parseInt(prompt("Enter the last year."));

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

let resultHTML = "<ul>";

for (let year = first; year <= last; year++) {
  if (isLeapYear(year)) {
    resultHTML += `<li>${year}</li>`;
  }
}

resultHTML += "</ul>";

document.querySelector('#list').innerHTML = resultHTML;
