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

// [a] Sortiere das Array numerisch aufsteigend!
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

// [a] Gib mit Hilfe der map Methode ein neues Array aus, in dem alle Zahlen verdoppelt sind!
// [b] Gib mit Hilfe der map Methode ein neues Array aus, in dem alle geraden Zahlen quadriert sind! Ungerade Zahlen sollen unverändert bleiben!

// __________________________________

// ## Filter

// ### Theorie

// ### Aufgabe 1

// Gegeben ist ein leeres Array:

// ```javascript
// let myArray = [];
// ```

// [a] Fülle das Array mit 100 zufälligen ganzen Zahlen zwischen 1 und 100! Sortiere das Array danach aufsteigend!
// [b] Nutze die filter Methode, um nur die Zahlen aus dem Array anzuzeigen, die größer als 50 sind!
// [c] Filtere nun nach allen Zahlen, welche das Ergebnis einer Zweierpotenz sind (1, 4, 9, ..., 100)

// __________________________________

// ## Reduce

// ### Theorie

// ### Aufgabe 1

// Gegeben ist ein Array mit Zahlen:

// ```javascript
// const myNumbers2 = [1, 2, 3, 4, 5];
// ```

// [a] Gib mit Hilfe der reduce Methode die Summe aller Zahlen aus!
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

// [a] Ermittle das aktuelle Guthaben (Wert des Kontos nach der letzten Transaktion)! Welche Methode eignet sich dafür am besten? Nutze diese!
// [b] Lass nur die Transaktionen anzeigen, deren Betrag größer als 40 ist (unabhängig ob Ein- oder Auszahlung)! Welche Methode eignet sich dafür am besten? Nutze diese!
// [c] Verdopple die Werte aller Einzahlungen! Welche Methode eignet sich dafür am besten? Nutze diese!
// [d] Sortiere die Transaktionen nach dem Betrag aufsteigend! Welche Methode eignet sich dafür am besten? Nutze diese!

// SOLUTIONS

// ## Sort

// ### Aufgabe 1

const arr1 = ["Apfel", "Birne", "Zitrone", "Ananas", "Banane", "Kirsche", "Mango", "Pfirsich", "Marille", "Zwetschke"];

arr1.sort();

console.log(arr1);

// ### Aufgabe 2

const arr2 = [2, 91, 1242, -3, 0, 2, 52, 14.6, 18, 1001];

// [a] Sortiere das Array numerisch aufsteigend!

arr2.sort((a, b) => a - b);

console.log(arr2);

// [b] Sortiere das Array numerisch absteigend!

arr2.sort((a, b) => b - a);

console.log(arr2);

// ### Aufgabe 3

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

persons.sort((a, b) => a.age - b.age);

console.log(persons);

// __________________________________

// ## Map

// ### Aufgabe 1

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myNumbers.map((number) => number * 2))

console.log(myNumbers.map((number) => number % 2 === 0 ? number ** 2 : number))

// __________________________________

// ## Filter

// ### Aufgabe 1

let myArray = [];

for (let i = 0; i < 100; i++) {
    myArray.push(Math.floor(Math.random() * 100) + 1);
}

myArray.sort((a, b) => a - b);

console.log(myArray);

console.log(myArray.filter((number) => number > 50));

console.log(myArray.filter((number) => Math.sqrt(number) % 1 === 0));

// __________________________________

// ## Reduce

// ### Aufgabe 1

const myNumbers2 = [1, 2, 3, 4, 5];

console.log(myNumbers2.reduce((acc, number) => acc + number, 0));

console.log(myNumbers2.reduce((acc, number) => acc + number ** 2, 0));

// __________________________________

// ## BONUS: Alle Methoden kombiniert

// ### Aufgabe

const transactions = [
    { type: 'Einzahlung', amount: 100 },
    { type: 'Auszahlung', amount: 20 },
    { type: 'Einzahlung', amount: 50 },
    { type: 'Auszahlung', amount: 10 },
    { type: 'Einzahlung', amount: 120 },
];

// [a] Ermittle das aktuelle Guthaben (Wert des Kontos nach der letzten Transaktion)! Welche Methode eignet sich dafür am besten? Nutze diese!

console.log(transactions.reduce((acc, transaction) => transaction.type === "Einzahlung" ? acc + transaction.amount : acc - transaction.amount, 0));

// [b] Lass nur die Transaktionen anzeigen, deren Betrag größer als 40 ist (unabhängig ob Ein- oder Auszahlung)! Welche Methode eignet sich dafür am besten? Nutze diese!

console.log(transactions.filter((transaction) => transaction.amount > 40));

// [c] Verdopple die Werte aller Einzahlungen! Welche Methode eignet sich dafür am besten? Nutze diese!

console.log(transactions.map((transaction) => transaction.type === "Einzahlung" ? transaction.amount * 2 : transaction.amount));

// [d] Sortiere die Transaktionen nach dem Betrag aufsteigend! Welche Methode eignet sich dafür am besten? Nutze diese!

console.log(transactions.sort((a, b) => a.amount - b.amount));

// __________________________________



