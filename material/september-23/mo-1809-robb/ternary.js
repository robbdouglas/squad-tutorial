// ## AUFGABE - TERNARY OPERATOR

// ### Aufgabe 1

// Du schreibst ein kleines Programm zur Bewertung von Schülern. Die Schüler erhalten Noten von 1 bis 5, wobei 1 die beste Note ist und 5 die schlechteste. Schreibe JavaScript-Code, der die folgende Aufgabe löst: Wenn die Note eines Schülers kleiner oder gleich 3 ist, gib "Bestanden" aus, ansonsten gib "Durchgefallen" aus. Verwende den Ternary Operator, um dies in einer einzigen Zeile Code zu erreichen.

// ### Aufgabe 2

// Du entwickelst eine Einkaufs-App. Schreibe JavaScript-Code, der den Endpreis eines Produkts berechnet, basierend auf dem Nettopreis und einem Mehrwertsteuersatz. Wenn der Mehrwertsteuersatz 19% oder höher ist, gib "Hoher Steuersatz" aus, ansonsten gib "Normaler Steuersatz" aus. Verwende den Ternary Operator, um dies in einer einzigen Zeile Code zu erreichen.

// ### Aufgabe 3

// Nutze den Ternary Operator, um die folgende Aufgabe zu lösen: Du nimmst an einer Sportwette teil. Es spielen Dortmund gegen Bayern. Du setzt 50€ auf den Sieg von Dortmund. Die Quote beträgt 2. Wenn Dortmund gewinnt, erhältst du 100€, ansonsten verlierst du deinen Einsatz. Gib den Gewinn oder Verlust in der Konsole aus. Definiere dazu Variablen für die folgenden Werte:
// Punkte Dortmund, Punkte Bayern, Einsatz, Quote, Gewinn, Geld vor Wette, Geld nach Wette.

// WDH TERNARY OPERATOR

let katharina = 0;
let melle = 1;

console.log(katharina >= melle ? "katharina" : "melle");

// IF ELSE

if (katharina >= melle) {
  console.log("katharina");
} else {
  console.log("melle");
}

// WDH && ||

// && UND:

// beide true --> true
// ein mal true, ein mal false --> false
// beide false --> false

// Wir stellen zwei Aussagen gegenüber. BEIDE Aussagen müssen true sein, damit das Ergebnis true wird

// || ODER:

// beide true --> true
// ein mal true, ein mal false --> true
// beide false --> false

// Wir stellen zwei Aussagen gegenüber. Es reicht, wenn mindestens EINE der beiden Aussagen true ist

let bita = 5;
let hamze = 9;
let kai = 4;

if (bita < hamze || bita < kai) {
  console.log("Bita hat gewonnen");
} else {
  console.log("Bita hat nicht gewonnen");
}

// ### Aufgabe 1

// Du schreibst ein kleines Programm zur Bewertung von Schülern. Die Schüler erhalten Noten von 1 bis 5, wobei 1 die beste Note ist und 5 die schlechteste. 
// Schreibe JavaScript-Code, der die folgende Aufgabe löst: Wenn die Note eines Schülers kleiner oder gleich 3 ist, 
// gib "Bestanden" aus, ansonsten gib "Durchgefallen" aus. Verwende den Ternary Operator, um dies in einer einzigen Zeile Code zu erreichen.

let note = 4;

console.log(note<=3 ? "Bestanden" : "Durchgefallen");

// if (WENN) {
//     DANN
// }
// else {
//     SONST
// }

// WENN ? DANN : SONST


// AUFGABE 2

// ### Aufgabe 2

// Du entwickelst eine Einkaufs-App. Schreibe JavaScript-Code, der den Endpreis eines Produkts berechnet, 
// basierend auf dem Nettopreis und einem Mehrwertsteuersatz. Wenn der Mehrwertsteuersatz 19% oder höher ist, 
// gib "Hoher Steuersatz" aus, ansonsten gib "Normaler Steuersatz" aus. Verwende den Ternary Operator, um dies in einer einzigen Zeile Code zu erreichen.

let steuersatz = 18;

console.log(steuersatz >= 19 ? "Hoher Steuersatz" : "Normaler Steuersatz");

// AUFGABE X

// Ein Konzertticket kostet 50€.  Schreibe Code, der dir sagt "Du kannst das Ticket kaufen" wenn du mindestens den Konzertpreis bezahlen kannst.
// Lass dir in der Konsole ausgeben "Du kannst dir das Ticket nicht leisten", sonst.

let ticketPrice = 50;
let meinGeld = 40;

console.log(meinGeld>=ticketPrice ? "Du kannst das Ticket kaufen" : "Du kannst dir das Ticket nicht leisten");

// WENN ? DANN : SONST