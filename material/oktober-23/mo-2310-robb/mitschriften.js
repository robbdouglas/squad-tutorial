// # Some & Every

// ## Aufgabe 1 - Every

// Gegeben ist ein Array aus Objekten, das Schüler mit ihren Noten in einem Test repräsentiert. Überprüfe mit Hilfe der every-Methode, ob alle Studenten die Prüfung bestanden haben. Um die Prüfung zu bestehen müssen mindestens 60 Punkte erreicht werden.

// ```javascript
// const schuelerNoten = [
//   { name: "Max", note: 78 },
//   { name: "Anna", note: 92 },
//   { name: "Paul", note: 63 },
//   { name: "Emma", note: 89 },
//   { name: "Tom", note: 84 },
//   { name: "Lisa", note: 61 },
// ];
// ```

// [a] Schreibe eine Funktion, welche die every-Methode verwendet, um zu überprüfen, ob alle Noten höher oder gleich 60 sind. Wenn alle Noten bestanden sind, soll die Ausgabe "Alle Studenten haben die Prüfung bestanden!" sein. Andernfalls soll die Ausgabe lauten: "Nicht alle Studenten haben die Prüfung bestanden." <br>
// [b] Der Schuldirektor hat beschlossen, dass jede Klasse eine Belohnung bekommt, wenn alle Schüler die Prüfung bestanden haben und eine durchschnittliche Punktzahl von mindestens 70 erreicht wurde. Schreibe eine Funktion, welche die every-Methode verwendet, um zu überprüfen, ob alle Noten höher oder gleich 60 sind und die durchschnittliche Punktzahl mindestens 70 beträgt. Wenn alle Noten bestanden sind und die durchschnittliche Punktzahl mindestens 70 beträgt, soll die Ausgabe "Alle Studenten haben die Prüfung bestanden und die Klasse bekommt eine Belohnung!" sein. Andernfalls soll die Ausgabe lauten: "Nicht alle Studenten haben die Prüfung bestanden oder die durchschnittliche Punktzahl ist zu niedrig." <br>

// SOLUTION

const schuelerNoten = [
  { name: "Max", note: 78 },
  { name: "Anna", note: 92 },
  { name: "Paul", note: 63 },
  { name: "Emma", note: 89 },
  { name: "Tom", note: 84 },
  { name: "Lisa", note: 61 },
];

// a

function allStudentsPassed() {
  const grades = schuelerNoten.every((x) => x.note >= 60); // Ergebnis: true oder false
  if (grades) {
    console.log("Alle haben bestanden!");
  } else {
    console.log("Nicht alle haben bestanden.");
  }
}

allStudentsPassed();

// b

function allStudentsPassedAndAverageGreater70() {
  const grades = schuelerNoten.every((x) => x.note >= 60); // Ergebnis: true oder false
  const average =
    schuelerNoten.reduce((acc, currentValue) => acc + currentValue.note, 0) /
    schuelerNoten.length;
  if (grades === true && average >= 70) {
    console.log(
      "Alle haben bestanden und der Durchschnitt ist mindestens 70 Punkte."
    );
  } else {
    console.log(
      "Nicht alle Studenten haben bestanden oder der Durchschnitt ist nicht mindestens 70"
    );
  }
}

allStudentsPassedAndAverageGreater70();
console.log("__________________________________________________");

// ## Aufgabe 2 - Some

// Schreibe eine JavaScript Funktion, welche 10 zufällige ganze Zahlen zwischen 40 und 60 generiert, aufsteigend sortiert und in einem Array speichert. Überprüfe mit Hilfe der some-Methode, ob...

function generateRandomNumbers() {
  const randomNumbers = [];
  for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 21) + 40);
  }
  return randomNumbers.sort((a, b) => a - b);
}

const randomNumbers = generateRandomNumbers();
console.log(randomNumbers);

// [a] ...mindestens eine Zahl größer als 50 ist. <br>
// [b] ...die Zahl 50 gezogen wurde. <br>
// [c] ...mindestens eine Zahl gezogen wurde, welche durch 6 teilbar ist.
