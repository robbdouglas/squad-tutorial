const obj1 = { a: 1, e: 2 };
const obj2 = { b: 3, c: 4 };
const combined = Object.assign({}, obj1, obj2);
console.log(combined); // Ausgabe: { a: 1, e: 2, b: 3, c: 4 }

const fruits1 = ["Apfel", "Banane"];
const fruits2 = ["Banane", "Kirsche", "Orange"];
const combinedFruits = fruits1.concat(fruits2);
console.log(combinedFruits); // Ausgabe: ['Apfel', 'Banane', 'Kirsche', 'Orange']

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Ausgabe: [2, 4, 6, 8]
