// PRIMITIVE DATA TYPES

// VARIABLES

// STRINGS

let name = "Robb";

console.log(name);

// NUMBERS, INTEGERS

let age = 29;

console.log(age);

// CONSOLE LOG WITH VARIABLES

console.log("My name is " + name);
console.log("My age is " + age);

// BOOLEANS, BINARIES

let isStudent = true;

// CALCULATING

let months = age * 12;

console.log(months);
console.log("My age in months is " + months);

let days = age * 365;
console.log("My age in days is " + days);

// CALCULATING 2

const a = 5;
const b = 10;
console.log(a + b);

// CALCULATING 3

const pi = 3.141592653589793238462643383279502884197169399375105820974944592307816406286;

let radius = 5;
let circumference = 2 * pi * radius;
console.log(circumference);

// BUTTON

let button = document.querySelector("button");

button.onclick = () => {
alert("Hello World!");
}