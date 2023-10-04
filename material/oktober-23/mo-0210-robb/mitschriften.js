// FUNCTION BASICS IN JAVASCRIPT

// WIEDERHOLUNG

// 1. Wege, eine Funktion zu definieren

// function declaration

// function firstName(name) {
//     console.log(name);
// }

// firstName("Laila");

// // function expression

// const lastName = function(name2) {
//     console.log(name2);
// }

// lastName("Jan");

// arrow function

// const sum = (...numbers) => { //parameter
//     if (numbers.length === 0) {
//         return 0;
//     }
//     return numbers.reduce((acc,current)=>acc+current,0);
// };

// console.log(sum(1, 15, 12, -6, 34, 6)); // argumente

// 2. Unterschiede zwischen Parameter und Argument

// parameter: name der werte, mit denen die funktion arbeitet (nicht konkret)
// argument: tatsächliche werte

// 3. Wann endet eine Funktion?

// return

// 4. Was ist der Unterschied zwischen return und console.log?

// 5. Wie unterscheiden sich Rest- und Spreadparameter?

// spread: 

// const numbers = [1, 2, 3];
// const moreNumbers = [...numbers, 4, 5, 6];

// console.log(moreNumbers);

// Ausgabe: [1, 2, 3, 4, 5, 6]

// 6. Was ist eine pure function und welche Eigenschaften hat sie?

//__________________________________________________________________________________--

// # Funktionen in JavaScript

// Löse alle Aufgaben (Bonus: und füge zu jeder Lösung eine geeignete Fehlermeldung hinzu, falls die eingegebenen Argumente nicht den passenden Datentyp haben)!

// ## Aufgabe 1

// Erstelle eine Funktion, welche eine Begrüßung ausgibt. <br>
// Parameter: Name <br>
// gewünschter Datentyp:

// ## Aufgabe 2

// Erstelle eine Funktion, welche eine Begrüßung ausgibt. Abhängig davon, ob du die Person leiden kannst oder nicht, soll die Begrüßung anders ausfallen. Wenn du die Person leiden kannst, gib eine freundliche Begrüßung aus. Falls nicht, gib eine unfreundliche Begrüßung aus. Definiere hierzu einen zweiten Parameter zur Hilfe! <br>
// Parameter: Name, mögen (true/false) <br>
// gewünschte Datentypen:

const greeting = (firstName, like) => like == true ? `hallo ${firstName}, du bist cool!` : `hallo ${firstName}, du bist scheiße!`;

console.log(greeting("Rami", true));
console.log(greeting("Hitler", false));

// ## Aufgabe 3

// Erstelle eine Funktion zur Berechnung des Flächeninhalts eines Rechtecks. Einheiten werden vernachlässigt.  <br>
// Parameter: Länge, Breite <br>
// gewünschte Datentypen: 

// flächeninhalt = länge * breite

function flaecheninhalt(laenge, breite) {
    const flaecheninhalt = laenge * breite;
    return flaecheninhalt;
}

console.log(flaecheninhalt(6, 4));

// ## Aufgabe 6

// Erstelle eine Funktion, welche 100 zufällige Zahlen zwischen 0 und 100 in einem Array speichert und aufsteigend sortiert zurückgibt. Danach sollen Mittelwert, Minimum und Maximum der Urliste berechnet und ausgegeben werden. Benötigen wir hierzu Parameter? Begründe deine Antwort!

// Bonus: Erhöhe die Anzahl der ausgegebenen Zahlen von 100 auf 10000! Welchen Mittelwert, welches Minimum und welches Maximum erwarten wir und warum?


