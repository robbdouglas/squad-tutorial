## Object Methods

# Object.keys(): Diese Methode gibt ein Array der Schlüssel (Eigenschaftsnamen) eines Objekts zurück.

javascript

const person = {
name: 'John',
age: 30,
city: 'New York'
};

const keys = Object.keys(person);
console.log(keys); // Ausgabe: ['name', 'age', 'city']

# Object.values(): Gibt ein Array der Werte der Eigenschaften eines Objekts zurück.

javascript

const person = {
name: 'John',
age: 30,
city: 'New York'
};

const values = Object.values(person);
console.log(values); // Ausgabe: ['John', 30, 'New York']

# Object.entries(): Gibt ein Array von Arrays zurück, wobei jedes innere Array ein Schlüssel-Wert-Paar darstellt.

javascript

const person = {
name: 'John',
age: 30,
city: 'New York'
};

const entries = Object.entries(person);
console.log(entries);
// Ausgabe: [['name', 'John'], ['age', 30], ['city', 'New York']]

# Object.assign(): Kombiniert Eigenschaften von mehreren Objekten und erstellt ein neues Objekt.

javascript

const obj1 = { a: 1, e: 2 };
const obj2 = { b: 3, c: 4 };
const combined = Object.assign({}, obj1, obj2);
console.log(combined); // Ausgabe: { a: 1, e: 2, b: 3, c: 4 }

## Array Methods

# push(): Diese Methode fügt ein oder mehrere Elemente am Ende eines Arrays hinzu.

javascript

const fruits = ['Apfel', 'Banane'];
fruits.push('Kirsche');
console.log(fruits); // Ausgabe: ['Apfel', 'Banane', 'Kirsche']

# pop(): Entfernt das letzte Element aus dem Array und gibt es zurück.

javascript

const fruits = ['Apfel', 'Banane', 'Kirsche'];
const removedFruit = fruits.pop();
console.log(removedFruit); // Ausgabe: 'Kirsche'

# unshift(): Fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu.

javascript

const fruits = ['Banane', 'Kirsche'];
fruits.unshift('Apfel');
console.log(fruits); // Ausgabe: ['Apfel', 'Banane', 'Kirsche']

# shift(): Entfernt das erste Element aus dem Array und gibt es zurück.

javascript

const fruits = ['Apfel', 'Banane', 'Kirsche'];
const removedFruit = fruits.shift();
console.log(removedFruit); // Ausgabe: 'Apfel'

# concat(): Verbindet zwei oder mehr Arrays und gibt ein neues Array zurück.

javascript

const fruits1 = ['Apfel', 'Banane'];
const fruits2 = ['Kirsche', 'Orange'];
const combinedFruits = fruits1.concat(fruits2);
console.log(combinedFruits); // Ausgabe: ['Apfel', 'Banane', 'Kirsche', 'Orange']

# splice(): Ermöglicht das Hinzufügen, Entfernen oder Ersetzen von Elementen an bestimmten Stellen im Array.

javascript

const fruits = ['Apfel', 'Banane', 'Kirsche'];
fruits.splice(1, 1, 'Orange'); // Entfernt 1 Element bei Index 1 und fügt 'Orange' ein.
console.log(fruits); // Ausgabe: ['Apfel', 'Orange', 'Kirsche']

# slice(): Erzeugt eine flache Kopie eines Teils des Arrays, ohne das ursprüngliche Array zu ändern.

javascript

const fruits = ['Apfel', 'Banane', 'Kirsche', 'Orange'];
const subArray = fruits.slice(1, 3); // Kopiert Elemente von Index 1 bis 2.
console.log(subArray); // Ausgabe: ['Banane', 'Kirsche']

# map(): Erzeugt ein neues Array, indem eine Funktion auf jedes Element im Array angewendet wird.

javascript

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((num) => num \* 2);
console.log(doubledNumbers); // Ausgabe: [2, 4, 6, 8]

# filter(): Erzeugt ein neues Array, das nur die Elemente enthält, die eine bestimmte Bedingung erfüllen.

javascript

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Ausgabe: [2, 4, 6]

# reduce(): Reduziert das Array auf EINEN einzelnen Wert, indem eine akkumulierte Funktion auf jedes Element angewendet wird.

javascript

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Ausgabe: 15

## Klassen (Classes) sind ein grundlegendes Konzept in der objektorientierten Programmierung (OOP). Sie ermöglichen die Modellierung von Objekten und die Organisation von Code in wiederverwendbaren Strukturen. Hier sind die wichtigsten Konzepte im Zusammenhang mit Klassen:

# Klassen erstellen: Klassen dienen als Baupläne für Objekte. Sie definieren, welche Eigenschaften und Methoden ein Objekt haben wird. Die Deklaration einer Klasse sieht so aus:

javascript
Copy code
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

const person1 = new Person('John', 30);

greet() {
console.log(`Hallo, mein Name ist ${this.name} und ich bin ${this.age} Jahre alt.`);
}
}
Hier wird eine Klasse "Person" erstellt, die über einen Konstruktor für die Initialisierung von Eigenschaften (Name und Alter) und eine Methode "greet" verfügt.

# Instanzen erstellen: Um ein Objekt aus einer Klasse zu erstellen, wird das new Schlüsselwort zusammen mit dem Namen der Klasse verwendet.

javascript
Copy code
const person1 = new Person('John', 30);
const person2 = new Person('Alice', 25);
Hier werden zwei Instanzen der Klasse "Person" erstellt, wobei jede Instanz ihre eigenen Eigenschaften hat.

# Vererbung: Klassen können von anderen Klassen erben. Dies bedeutet, dass sie Eigenschaften und Methoden der Elternklasse erben und diese erweitern oder überschreiben können.

javascript
Copy code
class Student extends Person {
constructor(name, age, school) {
super(name, age);
this.school = school;
}
}
Hier wird eine Klasse "Student" erstellt, die von der Klasse "Person" erbt. Sie hat zusätzlich die Eigenschaft "school".

# Konstruktoren und Super: Der Konstruktor ist eine spezielle Methode, die beim Erstellen einer Instanz aufgerufen wird. Mit super kann auf den Konstruktor der Elternklasse zugegriffen werden.

javascript
Copy code
class Student extends Person {
constructor(name, age, school) {
super(name, age);
this.school = school;
}
}
In diesem Beispiel wird der Konstruktor von "Student" verwendet, um die Eigenschaften von "Person" zu initialisieren, indem super(name, age) aufgerufen wird.
