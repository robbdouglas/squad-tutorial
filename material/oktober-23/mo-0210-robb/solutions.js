// # Funktionen in JavaScript

// Löse alle Aufgaben und füge zu jeder Lösung eine geeignete Fehlermeldung hinzu, falls die eingegebenen Argumente nicht den passenden Datentyp haben!

// ## Aufgabe 1

// Erstelle eine Funktion, welche eine Begrüßung ausgibt. <br>
// Parameter: Name <br>
// gewünschter Datentyp:

// ## Aufgabe 2

// Erstelle eine Funktion, welche eine Begrüßung ausgibt. Abhängig davon, ob du die Person leiden kannst oder nicht, soll die Begrüßung anders ausfallen. Wenn du die Person leiden kannst, gib eine freundliche Begrüßung aus. Falls nicht, gib eine unfreundliche Begrüßung aus. Definiere hierzu einen zweiten Parameter zur Hilfe! <br>
// Parameter: Name, mögen (true/false) <br>
// gewünschte Datentypen:

// ## Aufgabe 3

// Erstelle eine Funktion zur Berechnung des Flächeninhalts eines Rechtecks. In diesem Beispiel unterstellen wir, dass die Einheit Meter verwendet wird.  <br>
// Parameter: Länge, Breite <br>
// gewünschte Datentypen:

// ## Aufgabe 4

// Erstelle eine Funktion zur Berechnung des Flächeninhalts eines Kreises. <br>
// Parameter: Radius <br>
// gewünschter Datentyp:

// ## Aufgabe 5

// Erstelle eine Funktion mit 5 Parametern. Die Funktion soll den Durchschnitt der 5 eingegebenen Argumente berechnen. <br>
// Parameter: 5 Zahlen <br>
// gewünschter Datenyp:

// ## Aufgabe 6

// Erstelle eine Funktion, welche 100 zufällige Zahlen zwischen 0 und 100 in einem Array speichert und aufsteigend sortiert zurückgibt. Danach sollen Mittelwert, Minimum und Maximum der Urliste berechnet und ausgegeben werden. Benötigen wir hierzu Parameter? Begründe deine Antwort!
// Bonus: Erhöhe die Anzahl der ausgegebenen Zahlen von 100 auf 10000! Welchen Mittelwert, welches Minimum und welches Maximum erwarten wir und warum?

// LÖSUNGEN-------------------------------------------------------------

// Aufgabe 1

function greet1(name) {
  if (typeof name === "string") {
    console.log(`Hey ${name}!`);
  } else {
    console.log("Bitte gib einen Namen ein!");
  }
}

greet1("Robb");

// Aufgabe 2

function greet2(name2, like) {
  if (typeof name2 === "string" && typeof like === "boolean") {
    if (like) {
      console.log(`Hey ${name2}! Schön, dass du da bist!`);
    } else {
      console.log(`Na toll,  ${name2} ist da... `);
    }
  } else {
    console.log(
      "Bitte gib einen Namen als ersten Parameter ein. Bitte gib true oder false als zweiten Parameter ein!"
    );
  }
}

greet2("Robb", false);

// Aufgabe 3

function calcArea(length, width) {
  if (typeof length === "number" && typeof width === "number") {
    console.log(
      `Der Flächeninhalt des Rechtecks beträgt ${length * width} m².`
    );
  } else {
    console.log("Bitte gib eine Zahl als ersten und zweiten Parameter ein!");
  }
}

calcArea(10, 5);

// Aufgabe 4

function calcRadius(radius) {
  if (typeof radius === "number") {
    console.log(
      `Der Flächeninhalt des Kreises beträgt ${Math.PI * radius ** 2} m².`
    );
  } else {
    console.log("Bitte gib eine Zahl als Parameter ein!");
  }
}

calcRadius(10);

// Aufgabe 5

function calcAverage(num1, num2, num3, num4, num5) {
  if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    typeof num3 === "number" &&
    typeof num4 === "number" &&
    typeof num5 === "number"
  ) {
    console.log(
      `Der Durchschnitt der eingegebenen Zahlen beträgt ${
        (num1 + num2 + num3 + num4 + num5) / 5
      }.`
    );
  } else {
    console.log("Bitte gib 5 Zahlen als Parameter ein!");
  }
}

calcAverage(1, 2, 3, 4, 5);

// Aufgabe 6

function randomArray() {
  let randomArray = [];
  for (let i = 0; i < 100; i++) {
    randomArray.push(Math.floor(Math.random() * 101));
  }
  console.log(randomArray.sort((a, b) => a - b));
  console.log(
    `Der Mittelwert der Urliste beträgt ${
      randomArray.reduce((a, b) => a + b) / 100
    }.`
  );
  console.log(`Das Minimum der Urliste beträgt ${randomArray[0]}.`);
  console.log(`Das Maximum der Urliste beträgt ${randomArray[99]}.`);
}

randomArray();

// Bonus

function randomArray2() {
  let randomArray = [];
  for (let i = 0; i < 10000; i++) {
    randomArray.push(Math.floor(Math.random() * 101));
  }
  console.log(randomArray.sort((a, b) => a - b));
  console.log(
    `Der Mittelwert der Urliste beträgt ${
      randomArray.reduce((a, b) => a + b) / 10000
    }.`
  );
  console.log(`Das Minimum der Urliste beträgt ${randomArray[0]}.`);
  console.log(`Das Maximum der Urliste beträgt ${randomArray[randomArray2.length - 1]}.`);
}

randomArray2();
