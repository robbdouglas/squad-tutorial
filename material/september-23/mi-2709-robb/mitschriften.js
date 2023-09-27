// # Aufgaben while loop

// ## Aufgabe 1: Zahlenreihen

// Schreibe Code, der die folgenden Zahlenreihen ausgibt:

// [a] 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 <br>
// [b] 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 <br>
// [c] 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 <br>
// [d] 8, 4, 2, 1, 0.5, 0.25, 0.125 <br>
// [e] 3, 9, 27, 81, 243, 729, 2187, 6561 <br>

// ## Aufgabe 2: While Loops mit Zufallszahlen

// [a] Schreibe einen "while"-Loop, der Zufallszahlen zwischen 1 und 10 generiert und ausgibt, bis eine Zufallszahl größer oder gleich 9 ist.
//     Alle gezogenen Zufallszahlen sollen in der Konsole ausgegeben werden. Am Ende soll eine Nachricht erscheinen "Der Loop wurde unterbrochen, da eine Zufallszahl x gezogen wurde, welche größer oder gleich 9 ist." <br>
// [b] Schreibe einen "while"-Loop, der Zufallszahlen zwischen 1 und 10 generiert und ausgibt, bis eine Zufallszahl gleich 5 ist. <br>
// [c] Schreibe einen "while"-Loop, der einen 6-seitigen Würfel solange rollt, bis die Zahl 6 2 mal gewürfelt wurde. <br>

//------------------------------------------------------

//  WIEDERHOLUNG

// 1. Wozu benötigen wir Schleifen?

// Wiederholung von Schritten / Prozessen / Wdh von bestimmtem Code
// kürzerer Code
// -> weniger schreiben
// -> bessere Performance

// 2. Wie lautet die Syntax für einen for loop?

// for (let i = 0; i <= 10; i = i + 5) {
//   console.log(i);
// }

// 3. Wie lautet die Syntax für einen while loop?

// let j = 0;

// while (j <= 10) {
//   j++;
//   console.log(j);
// }

// SOLANGE (DAS GILT / DAS WAHR IST) {
//     MACH DAS
//     MACH AUCH DAS
// }

// 4. Was ist der Unterschied zwischen for und while?

// for: Iterationen / Schritte werden selbst festgelegt
// while: SOLANGE Bedingung true ist | Nutzen: Wenn man nicht genau weiß, wie lange der loop laufen soll (z.B. Passwort eingeben)

//______________________________________

// ## Aufgabe 1: Zahlenreihen

// Schreibe Code, der die folgenden Zahlenreihen ausgibt:

// [a] 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 <br>
// [b] 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 <br>
// [c] 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 <br>
// [d] 8, 4, 2, 1, 0.5, 0.25, 0.125 <br>
// [e] 3, 9, 27, 81, 243, 729, 2187, 6561 <br>

// [a]

let a = 1;

while (a <= 10) {
  console.log(a);
  a++;
}

// [b]

let b = 2;

while (b <= 20) {
  console.log(b);
  b += 2;
}

// [c]

let c = 1;

while (c <= 512) {
  console.log(c);
  c += c;
}

// [d] 8, 4, 2, 1, 0.5, 0.25, 0.125 <br>

let d = 16;

while (d > 0.125) {
  d /= 2;
  console.log(d);
}

// [e] 3, 9, 27, 81, 243, 729, 2187, 6561 <br>

let e = 3;

while (e <= 6561) {
  console.log(e);
  e *= 3;
}

// ## Aufgabe 2: While Loops mit Zufallszahlen

// [a] Schreibe einen "while"-Loop, der Zufallszahlen zwischen 1 und 10 generiert und ausgibt, bis eine Zufallszahl größer oder gleich 9 ist.
//     Alle gezogenen Zufallszahlen sollen in der Konsole ausgegeben werden. Am Ende soll eine Nachricht erscheinen "Der Loop wurde unterbrochen, da eine Zufallszahl x gezogen wurde, welche größer oder gleich 9 ist." <br>
// [b] Schreibe einen "while"-Loop, der Zufallszahlen zwischen 1 und 10 generiert und ausgibt, bis eine Zufallszahl gleich 5 ist. <br>
// [c] Schreibe einen "while"-Loop, der einen 6-seitigen Würfel solange rollt, bis die Zahl 6 2 mal gewürfelt wurde. <br>

// [a]

let x = 7;

while (x < 9) {
  x = Math.ceil(Math.random() * 10);
  console.log(x);
}

