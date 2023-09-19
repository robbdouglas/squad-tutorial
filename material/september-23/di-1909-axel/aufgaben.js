/* const myString = "20.33"; // string
const convertToNumber = Number(myString); 
console.log(convertToNumber);

let numStringFloat = "100.7em";
let numStringFloat2 = "100em";

console.log(parseFloat(numStringFloat));
console.log(parseFloat(numStringFloat2));

let num1 = 0.1;
let num2 = 0.2;
let result = (num1 + num2).toFixed(3);
console.log(result);

console.log(isNaN("45")); // false
console.log(isNaN("Axel")); // true
console.log(isNaN(45)); // false
console.log(NaN === NaN); /// false, Unique
console.log(2 === 2);
console.log("str" === "str"); */

// Aufgabe 1

let age = "18";

age = Number(age) ;

console.log (typeof age);

if (!isNaN(age)) {console.log( age * 2)} 
else {console.log("Fehlermeldung, bitte geben sie eine Nummer ein")}

