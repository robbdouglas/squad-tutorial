// # Aufgaben Nested Arrays, Nested Loops und Object Methods

// ## Nested Arrays und Nested Loops

// Definition Nested Array: Ein oder mehrere Arrays in einem "großen" Array.

// Definition Nested Loop: Ein oder mehrere Loops in einem "großen" Loop.

// ### Aufgabe 1

// Gegeben ist ein Nested Array

const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
];

// Schreibe ein Programm, das...

// [a] ... die length des Arrays nestedArray ausgibt! <br>

console.log(nestedArray.length);
console.log("_______________________________________________");

// [b] ... die length der inneren Arrays ausgibt. Nutze hierfür einen for loop! <br>

for (let i = 0; i < nestedArray.length; i++) {
  console.log(nestedArray[i].length);
}

console.log("_____________");
//___________________________________________________________

// Syntax basic for loop:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for...of -> für alle iterierbaren Datenstrukturen (Arrays, Strings, Maps, Sets, Objekte etc.)
// for...in -> für Objekte
// for...each -> für Arrays

//___________________________________________________________

// [c] ... die letzte Zahl des letzten Arrays ausgibt. Schreibe den Code hierfür dynamisch und nicht statisch! <br>

// const nestedArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
//   [13, 14, 15],
// ];

console.log(
  nestedArray[nestedArray.length - 1][
    nestedArray[nestedArray.length - 1].length - 1
  ]
);

console.log("_______");

console.log(nestedArray[4][2]);

// [d] ... alle Zahlen des gesamten Arrays ausgibt. Nutze hierfür einen nested loop! <br>
// [e] ... die Summe aller Zahlen des Arrays berechnet und ausgibt. <br>

// BONUS: ... die Summe der Quadrate aller Zahlen, welche durch 3 teilbar sind berechnet und ausgibt. <br>
// ___

// ## Object Methods

// Welche Object Methods kennen wir?

// 1.
// 2.
// 3.

// ### Aufgabe 2

// Verwende die folgenden Schritte, um Informationen aus dem gegebenen Objekt zu extrahieren:

// ```javascript
// const student = {
//   name: "Robb",
//   age: 29,
//   subject: "Web Development",
//   city: "Berlin",
//   classmates: ["Axel", "Melle", "Emanuela", "Bita"],
// };
// ```

// [a] Verwende Object.keys(), um eine Liste der Eigenschaften des Studentenobjekts zu erstellen. <br>
// [b] Nutze Object.values(), um eine Liste der Werte im Studentenobjekt zu erhalten. <br>
// [c] Kombiniere Object.keys() und Object.values() mit Object.entries(), um eine Liste von Arrays zu erhalten, die jeweils eine Eigenschaft und ihren Wert enthalten.

//___________________________________________________________
