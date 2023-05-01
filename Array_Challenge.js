/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero, my.indexOf("Gamal")).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.indexOf("Mazero"), my.indexOf("Osama")).reverse()); // ["Elham", "Mazero"]

console.log(my[2][0] + my[2][1] + my[1][2] + my[0][3] + my[1][4] + my[1][5]); // "Elzero"

console.log(my[1][4] + my[3][0].toUpperCase()); // "rO"
