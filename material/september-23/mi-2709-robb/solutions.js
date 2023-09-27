// # Aufgaben while loop

// ## Aufgabe 1: Zahlenreihen

// Schreibe Code, der die folgenden Zahlenreihen ausgibt:

// [a] 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// [b] 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// [c] 1, 2, 4, 8, 16, 32, 64, 128, 256, 512
// [d] 8, 4, 2, 1, 0.5, 0.25, 0.125
// [e] 3, 9, 27, 81, 243, 729, 2187, 6561

// ## Aufgabe 2: While Loops mit Zufallszahlen

// [a] Du sollst einen "while"-Loop schreiben, der Zufallszahlen zwischen 1 und 10 generiert und ausgibt, bis eine Zufallszahl größer oder gleich 9 ist.
//     Alle gezogenen Zufallszahlen sollen in der Konsole ausgegeben werden. Am Ende soll eine Nachricht erscheinen "Der Loop wurde unterbrochen, da eine Zufallszahl x gezogen wurde, welche größer oder gleich 9 ist."
// [b] Schreibe einen "while"-Loop, der Zufallszahlen zwischen 1 und 10 generiert und ausgibt, bis eine Zufallszahl gleich 5 ist.
// [c] Schreibe einen "while"-Loop, der einen 6-seitigen Würfel solange rollt, bis die Zahl 6 2 mal gewürfelt wurde.

// Aufgabe 1

//a

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

//b

let j = 2;

while (j <= 20) {
  console.log(j);
  j += 2;
}

//c

let k = 1;

while (k <= 512) {
  console.log(k);
  k *= 2;
}

//d

let l = 8;

while (l >= 0.125) {
  console.log(l);
  l /= 2;
}

//e

let m = 3;

while (m <= 6561) {
  console.log(m);
  m *= 3;
}

//Aufgabe 2

//a

let zufallszahl = Math.floor(Math.random() * 10 + 1);

while (zufallszahl < 9) {
  zufallszahl = Math.floor(Math.random() * 10 + 1);
  console.log(zufallszahl);
}

console.log(
  "Der Loop wurde unterbrochen, da eine Zufallszahl " +
    zufallszahl +
    " gezogen wurde, welche größer oder gleich 9 ist."
);

//b

let zufallszahl2 = Math.floor(Math.random() * 10 + 1);

while (zufallszahl2 != 5) {
  zufallszahl2 = Math.floor(Math.random() * 10 + 1);
  console.log(zufallszahl2);
}

console.log(
  "Der Loop wurde unterbrochen, da eine Zufallszahl " +
    zufallszahl2 +
    " gezogen wurde, welche gleich 5 ist."
);

//c

let wurf = 0;
let sechser = 0;

while (sechser < 2) {
  wurf = Math.floor(Math.random() * 6 + 1);
  console.log(wurf);
  if (wurf == 6) {
    sechser++;
  }
}

console.log(
  "Der Loop wurde unterbrochen, da eine Zufallszahl " +
    wurf +
    " gezogen wurde, welche gleich 6 ist."
);
