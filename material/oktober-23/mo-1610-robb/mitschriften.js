// Call Stack

function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
  foo();
}

function baz() {
  return console.log("baz");
  // bar();
  console.log("kuchen");
}

baz();

//---------------------------------------------

// Pure Function

function add(a, b) {
  return a + b;
}

// same add function, but as arrow function without return keyword

const add2 = (a, b) => a + b;

console.log(add2(2, 5));

// ---------------------------------------------

// Impure Function

let globalVar = 10;

function impureFunction(value) {
  globalVar += value;
  return globalVar;
}

console.log(impureFunction(7)); // Output: 15

// Pure functions sind Funktionen in der Programmierung, die unter bestimmten Bedingungen als " rein" oder " pure" gelten. Hier sind die Hauptmerkmale von puren Funktionen:

// Deterministisch: Eine pure Funktion gibt bei denselben Eingabewerten immer dasselbe Ergebnis zurück. Es gibt keine Zufallselemente oder externe Zustände, die das Ergebnis beeinflussen.

// Keine Seiteneffekte: Eine pure Funktion verursacht keine Seiteneffekte. Das bedeutet, sie ändert keine globalen Variablen, modifiziert keine externen Datenstrukturen und hat keine Auswirkungen auf den Programmzustand außerhalb der Funktion.

// Referenzielle Transparenz: Das Konzept der referenziellen Transparenz besagt, dass der Funktionsaufruf durch seinen Rückgabewert ersetzt werden kann, ohne das Programmverhalten zu ändern. Das erleichtert die Testbarkeit und das Verständnis von Code.

// Unabhängig von externen Zuständen: Pure Funktionen sind unabhängig von externen Zuständen oder Kontexten. Das bedeutet, sie verwenden nur ihre Eingabeparameter und interne Variablen, um Ergebnisse zu generieren.

// ---------------------------------------------

// rest parameter

// erstelle eine funktion mit rest parameter, die alle parameter aufsummiert

function sum(...args) {
  let result = 0;
  for (let arg of args) result += arg;
  return result;
}

console.log(
  sum(
    4,
    9,
    16,
    25,
    29,
    100,
    66,
    77,
    88,
    99,
    111,
    222,
    333,
    444,
    555,
    666,
    777,
    888,
    999
  )
);

// ---------------------------------------------

// spread operator

// erstelle eine funktion mit spread operator, die alle parameter aufsummiert

// Beispiel 1: Zusammenführen von Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Beispiel 2: Kopieren von Objekten
const originalObject = { name: 'John', age: 25 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // Output: { name: 'John', age: 25 }

