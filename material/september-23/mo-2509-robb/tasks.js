// ARRAYS

// AUFGABE 1

let numbers = [1, 2, 3, 4, 5];

//a

numbers.push(6);
console.log(numbers);

//b

numbers.splice(2, 1);
console.log(numbers);

//c

numbers.pop();
console.log(numbers);

//d

if (numbers.includes(5)) {
  console.log("5 ist vorhanden");
} else {
  console.log("5 ist nicht vorhanden");
}

numbers.pop();
console.log(numbers);

if (numbers.includes(5)) {
  console.log("5 ist vorhanden");
} else {
  console.log("5 ist nicht vorhanden");
}

// LOOPS----------------------

// AUFGABE 1

//a

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//b

for (let y = 59; y >= 51; y--) {
  console.log(y);
}

//c

for (let x = 0; x <= 100; x = x + 10) {
  console.log(x);
}

//d

for (let n = 1; n <= 256; n = n * 2) {
  console.log(n);
}

//e

for (let z = 4; z >= 0.125; z = z / 2) {
  console.log(z);
}

// AUFGABE 2

for (let p = 1; p <= 10; p++) {
  console.log(p + " " + p * p);
}

// AUFGABE 3

//a 

let zahl = Math.floor(Math.random() * 6 + 1)
console.log(zahl);

//diskret

let muenzwurf = ["kopf", "zahl"]

// stetig

