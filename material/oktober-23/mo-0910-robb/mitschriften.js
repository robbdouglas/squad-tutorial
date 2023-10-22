// # Aufgaben zu den Themen sort, map, filter, reduce und objects

// ## Sort

// ### Theorie

// Möglichkeiten mit `sort`:

// 1. alphabetisch sortieren
// 2. numerisch aufsteigend sortieren
// 3. numerisch absteigend sortieren
// 4. Sortierung von Objekten nach einer bestimmten Eigenschaft

// ### Aufgabe 1

// Gegeben ist ein Array mit Strings:

// ```javascript
// const arr1 = ["Apfel", "Birne", "Zitrone", "Ananas", "Banane", "Kirsche", "Mango", "Pfirsich", "Marille", "Zwetschke"];
// ```

// Sortiere das Array alphabetisch aufsteigend und gib es in der Konsole aus!

// ### Aufgabe 2

// Gegeben ist ein Array aus Zahlen:

// ```javascript
// const arr2 = [2, 91, 1242, -3, 0, 2, 52, 14.6, 18, 1001]
// ```

// [a] Sortiere das Array numerisch aufsteigend! <br>
// [b] Sortiere das Array numerisch absteigend!

// ### Aufgabe 3

// Gegeben sind mehrere Objekte mit den Eigenschaften `name` und `age`:

// ```javascript
// const person1 = {
//     name: "Robb",
//     age: 22
// }

// const person2 = {
//     name: "Jan",
//     age: 18
// }

// const person3 = {
//     name: "Emanuela",
//     age: 21
// }

// const person4 = {
//     name: "Axel",
//     age: 25
// }

// const person5 = {
//     name: "Laila",
//     age: 19
// }

// const person6 = {
//     name: "Melle",
//     age: 27
// }
// ```

// Sortiere die Personen nach ihrem Alter aufsteigend und gib sie in der Konsole aus!

// __________________________________

// ## Map

// ### Theorie

// ### Aufgabe 1

// Gegeben ist ein Array mit Zahlen:

// ```javascript
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ```

// [a] Gib mit Hilfe der map Methode ein neues Array aus, in dem alle Zahlen verdoppelt sind! <br>
// [b] Gib mit Hilfe der map Methode ein neues Array aus, in dem alle geraden Zahlen quadriert sind! Ungerade Zahlen sollen unverändert bleiben!

// __________________________________

// ## Filter

// ### Theorie

// ### Aufgabe 1

// Gegeben ist ein leeres Array:

// ```javascript
// let myArray = [];
// ```

// [a] Fülle das Array mit 100 zufälligen ganzen Zahlen zwischen 1 und 100! Sortiere das Array danach aufsteigend! <br>
// [b] Nutze die filter Methode, um nur die Zahlen aus dem Array anzuzeigen, die größer als 50 sind! <br>
// [c] Filtere nun stattdessen das Array mit den 100 Zahlen nach allen Zahlen, welche das Ergebnis einer Zweierpotenz sind (1, 4, 9, ..., 100)!

// __________________________________

// ## Reduce

// ### Theorie

// ### Aufgabe 1

// Gegeben ist ein Array mit Zahlen:

// ```javascript
// const myNumbers2 = [1, 2, 3, 4, 5];
// ```

// [a] Gib mit Hilfe der reduce Methode die Summe aller Zahlen aus! <br>
// [b] Gib mit Hilfe der reduce Methode die Summe der Quadrate aller Zahlen aus!

// __________________________________

// ## BONUS: Alle Methoden kombiniert

// ### Aufgabe

// Gegeben ist eine Liste von Transaktionen:

// ```javascript
// const transactions = [
//   { type: 'Einzahlung', amount: 100 },
//   { type: 'Auszahlung', amount: 20 },
//   { type: 'Einzahlung', amount: 50 },
//   { type: 'Auszahlung', amount: 10 },
//   { type: 'Einzahlung', amount: 120 },
// ];
// ```

// [a] Ermittle das aktuelle Guthaben (Wert des Kontos nach der letzten Transaktion)! Welche Methode eignet sich dafür am besten? Nutze diese! <br>
// [b] Lass nur die Transaktionen anzeigen, deren Betrag größer als 40 ist (unabhängig ob Ein- oder Auszahlung)! Welche Methode eignet sich dafür am besten? Nutze diese! <br>
// [c] Verdopple die Werte aller Einzahlungen! Welche Methode eignet sich dafür am besten? Nutze diese! <br>
// [d] Sortiere die Transaktionen nach dem Betrag aufsteigend! Welche Methode eignet sich dafür am besten? Nutze diese!

// # Aufgaben zu den Themen sort, map, filter, reduce und objects

// ## Sort

// ### Theorie

// Möglichkeiten mit `sort`:

// 1. alphabetisch sortieren (abcde, 1 12 2 22 23 3 31)
// 2. numerisch aufsteigend sortieren (12345)
// 3. numerisch absteigend sortieren (54321)
// 4. Sortierung von Objekten nach einer bestimmten Eigenschaft

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

const sortedPeople = people.sort((a, b) => a.age - b.age); // Aufsteigende Sortierung nach Alter

console.log(sortedPeople);

// sort();
// sort((a, b) => a - b); // Aufsteigende Sortierung
// sort((a, b) => b - a); // Absteigende Sortierung

// ### Aufgabe 1

// Gegeben ist ein Array mit Strings:

// ```javascript
// const arr1 = ["Apfel", "Birne", "Zitrone", "Ananas", "Banane", "Kirsche", "Mango", "Pfirsich", "Marille", "Zwetschke"];
// ```

// Sortiere das Array alphabetisch aufsteigend und gib es in der Konsole aus!

const arr1 = ["Apfel", "Birne", "Zitrone", "Ananas", "Banane", "Kirsche", "Mango", "Pfirsich", "Marille", "Zwetschke"];

function sortArray(arr) {
    return arr.sort();
}

console.log(sortArray(arr1));

console.log("-------------------------------------------------------");

// ### Aufgabe 2

// Gegeben ist ein Array aus Zahlen:

// ```javascript
// const arr2 = [2, 91, 1242, -3, 0, 2, 52, 14.6, 18, 1001]
// ```

// [a] Sortiere das Array numerisch aufsteigend! <br>
// [b] Sortiere das Array numerisch absteigend!

const arr2a = [2, 91, 1242, -3, 0, 2, 52, 14.6, 18, 1001];

arr2a.sort((a, b) => a - b);

console.log(arr2a);

arr2a.sort((a, b) => b - a);

console.log(arr2a);

console.log("-----------------------------------------------");

// ### Aufgabe 3

// Gegeben sind mehrere Objekte mit den Eigenschaften `name` und `age`:

// ```javascript
// const person1 = {
//     name: "Robb",
//     age: 22
// }

// const person2 = {
//     name: "Jan",
//     age: 18
// }

// const person3 = {
//     name: "Emanuela",
//     age: 21
// }

// const person4 = {
//     name: "Axel",
//     age: 25
// }

// const person5 = {
//     name: "Laila",
//     age: 19
// }

// const person6 = {
//     name: "Melle",
//     age: 27
// }
// ```

// Sortiere die Personen nach ihrem Alter aufsteigend und gib sie in der Konsole aus!

const person1 = {
    name: "Robb",
    age: 22
}

const person2 = {
    name: "Jan",
    age: 18
}

const person3 = {
    name: "Emanuela",
    age: 21
}

const person4 = {
    name: "Axel",
    age: 25
}

const person5 = {
    name: "Laila",
    age: 19
}

const person6 = {
    name: "Melle",
    age: 27
}

const persons = [person1, person2, person3, person4, person5, person6];

persons.sort((a, b) => a.age - b.age)

console.log(persons);

console.log("------------------------------------------------------");

// ## Map

// ### Theorie

// Die Map Methode arbeitet sich vom ersten bis zum letzten Element in einem Array durch und führt entsprechende weitere Methoden aus.

// ### Aufgabe 1

// Gegeben ist ein Array mit Zahlen:

// ```javascript
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ```

// [a] Gib mit Hilfe der map Methode ein neues Array aus, in dem alle Zahlen verdoppelt sind! <br>
// [b] Gib mit Hilfe der map Methode ein neues Array aus, in dem alle geraden Zahlen quadriert sind! Ungerade Zahlen sollen unverändert bleiben!

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = myNumbers.map((number) => number * 2);

console.log(doubleNumbers);

const squareNumbers = myNumbers.map((newNumber) => newNumber % 2 === 0 ? newNumber * newNumber : newNumber);

console.log(squareNumbers);

console.log("-----------------------------------");

// ## Reduce

// ### Theorie

// array.reduce(callback, initialValue);

// ### Aufgabe 1

// Gegeben ist ein Array mit Zahlen:

// ```javascript
// const myNumbers2 = [1, 2, 3, 4, 5];
// ```

// [a] Gib mit Hilfe der reduce Methode die Summe aller Zahlen aus! <br>
// [b] Gib mit Hilfe der reduce Methode die Summe der Quadrate aller Zahlen aus!

const myNumbers7 = [1, 2, 3, 4, 5];

const sum2 = myNumbers7.reduce((acc, currentValue) => acc + currentValue)

console.log(sum2);

// [acc + currentValue]
// 1. iteration: [0 + 1] = 1
// 2. iteration: [1 + 2] = 3
// 3. iteration: [3 + 3] = 6
// 4. iteration: [6 + 4] = 10
// 5. iteration: [10 + 5] = 15

console.log("------------------------------------------------------------------");

// ## Filter

// ### Theorie

// ### Aufgabe 1

// Gegeben ist ein leeres Array:

// ```javascript
// let myArray = [];
// ```

// [a] Fülle das Array mit 100 zufälligen ganzen Zahlen zwischen 1 und 100! Sortiere das Array danach aufsteigend! <br>
// [b] Nutze die filter Methode, um nur die Zahlen aus dem Array anzuzeigen, die größer als 50 sind! <br>
// [c] Filtere nun stattdessen das Array mit den 100 Zahlen nach allen Zahlen, welche das Ergebnis einer Zweierpotenz sind (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)!

let myArray = [];

// a

for (let i = 0; i < 100; i++) {
    let random = Math.ceil(Math.random() * 100);
    myArray.push(random)
}

myArray.sort((a, b) => a - b);

console.log(myArray);

// b 

const biggerThan50 = myArray.filter((a) => a > 50);

console.log(biggerThan50);

// c 

const squareNumbers2 = myArray.filter((z) => Number.isInteger(Math.sqrt(z)))

console.log(squareNumbers2);